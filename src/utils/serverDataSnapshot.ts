import type {
	Client,
	Guild,
	GuildBasedChannel,
	GuildEmoji,
	GuildMember,
	Role,
	Sticker,
} from "discord.js";
import prisma from "@/database/db";

// ============================================================
// 型定義
// ============================================================

export type ChannelSnapshot = {
	id: string;
	name: string;
	type: number;
	position: number;
	parentId: string | null;
	topic: string | null;
	nsfw: boolean;
	rateLimitPerUser: number;
	bitrate: number | null;
	userLimit: number | null;
	permissionOverwrites: PermissionOverwriteSnapshot[];
};

export type PermissionOverwriteSnapshot = {
	id: string;
	type: number; // 0=role, 1=member
	allow: string;
	deny: string;
};

export type RoleSnapshot = {
	id: string;
	name: string;
	color: number;
	hoist: boolean;
	position: number;
	permissions: string;
	mentionable: boolean;
	managed: boolean;
	iconURL: string | null;
};

export type MemberSnapshot = {
	id: string;
	username: string;
	displayName: string;
	discriminator: string;
	bot: boolean;
	joinedAt: string | null;
	roles: string[]; // role IDs
	nickname: string | null;
	premiumSince: string | null;
	pending: boolean;
	communicationDisabledUntil: string | null;
	avatarURL: string | null;
};

export type EmojiSnapshot = {
	id: string | null;
	name: string | null;
	animated: boolean;
	available: boolean;
	managed: boolean;
	requiresColons: boolean | null;
	url: string;
};

export type StickerSnapshot = {
	id: string;
	name: string;
	description: string | null;
	format: number;
	available: boolean | null;
	url: string;
};

// ============================================================
// データ収集ヘルパー
// ============================================================

const collectChannelSnapshot = (ch: GuildBasedChannel): ChannelSnapshot => {
	const permissionOverwrites: PermissionOverwriteSnapshot[] =
		"permissionOverwrites" in ch
			? [...ch.permissionOverwrites.cache.values()].map((ow) => ({
					id: ow.id,
					type: ow.type,
					allow: ow.allow.bitfield.toString(),
					deny: ow.deny.bitfield.toString(),
				}))
			: [];

	const bitrate = "bitrate" in ch ? (ch.bitrate ?? null) : null;
	const userLimit = "userLimit" in ch ? (ch.userLimit ?? null) : null;
	const topic = "topic" in ch ? (ch.topic ?? null) : null;
	const nsfw = "nsfw" in ch ? Boolean(ch.nsfw) : false;
	const rateLimitPerUser =
		"rateLimitPerUser" in ch ? (ch.rateLimitPerUser ?? 0) : 0;

	return {
		id: ch.id,
		name: ch.name,
		type: ch.type,
		position: "position" in ch ? (ch.position ?? 0) : 0,
		parentId: "parentId" in ch ? (ch.parentId ?? null) : null,
		topic,
		nsfw,
		rateLimitPerUser,
		bitrate,
		userLimit,
		permissionOverwrites,
	};
};

const collectRoleSnapshot = (role: Role): RoleSnapshot => ({
	id: role.id,
	name: role.name,
	color: role.color,
	hoist: role.hoist,
	position: role.position,
	permissions: role.permissions.bitfield.toString(),
	mentionable: role.mentionable,
	managed: role.managed,
	iconURL: role.iconURL() ?? null,
});

const collectMemberSnapshot = (member: GuildMember): MemberSnapshot => ({
	id: member.id,
	username: member.user.username,
	displayName: member.displayName,
	discriminator: member.user.discriminator,
	bot: member.user.bot,
	joinedAt: member.joinedAt?.toISOString() ?? null,
	roles: [...member.roles.cache.keys()],
	nickname: member.nickname ?? null,
	premiumSince: member.premiumSince?.toISOString() ?? null,
	pending: member.pending,
	communicationDisabledUntil:
		member.communicationDisabledUntil?.toISOString() ?? null,
	avatarURL: member.user.displayAvatarURL({ size: 256 }),
});

const collectEmojiSnapshot = (emoji: GuildEmoji): EmojiSnapshot => ({
	id: emoji.id,
	name: emoji.name,
	animated: emoji.animated ?? false,
	available: emoji.available ?? true,
	managed: emoji.managed,
	requiresColons: emoji.requiresColons,
	url: emoji.imageURL(),
});

const collectStickerSnapshot = (sticker: Sticker): StickerSnapshot => ({
	id: sticker.id,
	name: sticker.name,
	description: sticker.description ?? null,
	format: sticker.format,
	available: sticker.available,
	url: sticker.url,
});

// ============================================================
// 1サーバー分のスナップショットを保存
// ============================================================

export const saveGuildSnapshot = async (guild: Guild): Promise<void> => {
	// チャンネル（カテゴリー含む全種別）
	const allChannels = [...guild.channels.cache.values()].map(
		collectChannelSnapshot,
	);

	// ロール（@everyone含む、position順）
	const allRoles = [...guild.roles.cache.values()]
		.sort((a, b) => b.position - a.position)
		.map(collectRoleSnapshot);

	// メンバー（fetch済み前提）
	const allMembers = [...guild.members.cache.values()].map(
		collectMemberSnapshot,
	);

	// 絵文字
	const allEmojis = [...guild.emojis.cache.values()].map(collectEmojiSnapshot);

	// スタンプ
	const allStickers = [...guild.stickers.cache.values()].map(
		collectStickerSnapshot,
	);

	await prisma.serverSnapshot.create({
		data: {
			serverId: guild.id,
			serverName: guild.name,
			serverDescription: guild.description ?? null,
			iconUrl: guild.iconURL({ size: 256 }) ?? null,
			bannerUrl: guild.bannerURL({ size: 1024 }) ?? null,
			ownerId: guild.ownerId,
			memberCount: guild.memberCount,
			boostCount: guild.premiumSubscriptionCount ?? 0,
			boostTier: guild.premiumTier ?? 0,
			channels: JSON.stringify(allChannels),
			roles: JSON.stringify(allRoles),
			members: JSON.stringify(allMembers),
			emojis: JSON.stringify(allEmojis),
			stickers: JSON.stringify(allStickers),
		},
	});
};

// ============================================================
// serverDataEnabled がオンの全サーバーを一括保存
// ============================================================

export const runServerDataSnapshot = async (client: Client): Promise<void> => {
	// serverDataEnabled が true のサーバーID一覧を取得
	const enabledSettings = await prisma.serverSetting.findMany({
		where: { serverDataEnabled: true },
		select: { serverId: true },
	});

	if (enabledSettings.length === 0) {
		console.log("[ServerSnapshot] 対象サーバーなし、スキップ");
		return;
	}

	const enabledIds = new Set(enabledSettings.map((s) => s.serverId));

	// Botがキャッシュしているギルドのうち、対象のものを処理
	const targetGuilds = [...client.guilds.cache.values()].filter((g) =>
		enabledIds.has(g.id),
	);

	console.log(
		`[ServerSnapshot] スナップショット開始: ${targetGuilds.length}サーバー`,
	);

	let successCount = 0;
	let errorCount = 0;

	for (const guild of targetGuilds) {
		try {
			// メンバーキャッシュを最新化（GuildMembers intent 必須）
			await guild.members.fetch();

			// スタンプ・絵文字のキャッシュ更新
			await guild.emojis.fetch();
			await guild.stickers.fetch();

			await saveGuildSnapshot(guild);
			successCount++;
			console.log(`[ServerSnapshot] ✅ 保存完了: ${guild.name} (${guild.id})`);
		} catch (error) {
			errorCount++;
			console.error(
				`[ServerSnapshot] ❌ 保存失敗: ${guild.name} (${guild.id})`,
				error,
			);
		}
	}

	console.log(
		`[ServerSnapshot] 完了 — 成功: ${successCount}, 失敗: ${errorCount}`,
	);
};
