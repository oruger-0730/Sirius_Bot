const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  MessageFlags,
} = require('discord.js');
const { getGuildJoinSetting } = require('../utils/joinMessageSettings');
const { getGuildLeaveSetting } = require('../utils/leaveMessageSettings');
const { getGuildSpamSetting } = require('../utils/spamBlockSettings');
const { getGuildAutoReactionSetting } = require('../utils/autoReactionSettings');
const { getGuildShortLinkSetting } = require('../utils/shortLinkBlockSettings');
const { getGuildXpSetting } = require('../utils/xpSystem');

const PAGE_ONE = 1;
const PAGE_TWO = 2;

module.exports = {
  data: new SlashCommandBuilder()
    .setName('settingpanel')
    .setDescription('サーバー設定パネルを開きます（Join/Leave/SpamBlock/AutoReaction/ShortLinkBlock/XP）')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction) {
    if (!interaction.member.permissions.has(PermissionFlagsBits.Administrator)) {
      return interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setColor('Red')
            .setTitle('権限エラー')
            .setDescription('あなたに **管理者** 権限がありません。')
        ],
        flags: MessageFlags.Ephemeral,
      });
    }

    const guildId = interaction.guild.id;
    const joinSetting = getGuildJoinSetting(guildId);
    const leaveSetting = getGuildLeaveSetting(guildId);
    const spamSetting = getGuildSpamSetting(guildId);
    const autoReactionSetting = getGuildAutoReactionSetting(guildId);
    const shortLinkSetting = getGuildShortLinkSetting(guildId);
    const xpSetting = getGuildXpSetting(guildId);

    await interaction.reply({
      embeds: [buildPanel(joinSetting, leaveSetting, spamSetting, autoReactionSetting, shortLinkSetting, xpSetting, PAGE_ONE)],
      components: buildButtons(joinSetting, leaveSetting, spamSetting, autoReactionSetting, shortLinkSetting, xpSetting, PAGE_ONE),
      flags: MessageFlags.Ephemeral,
    });
  },

  PAGE_ONE,
  PAGE_TWO,
  buildPanel,
  buildButtons,
  inferPanelPageFromMessage,
};

function mentionList(ids, type) {
  if (!ids || ids.length === 0) return 'なし';
  if (type === 'channel') return ids.map((id) => `<#${id}>`).join(', ');
  return ids.map((id) => `<@&${id}>`).join(', ');
}

function buildPanel(joinSetting, leaveSetting, spamSetting, autoReactionSetting, shortLinkSetting, xpSetting, page = PAGE_ONE) {
  const isPageTwo = page === PAGE_TWO;

  const embed = new EmbedBuilder()
    .setColor('Blue')
    .setTitle(`⚙️ サーバー設定パネル（${isPageTwo ? '2/2' : '1/2'}）`)
    .setDescription('Join / Leave / SpamBlock / AutoReaction / ShortLinkBlock / XP をこのパネルから設定できます。')
    .setFooter({
      text: '[user] = ユーザー表示 / [membercount] = サーバー人数',
    });

  if (!isPageTwo) {
    return embed.addFields(
      {
        name: '📥 Joinメッセージ',
        value:
          `状態: **${joinSetting.enabled ? 'ON' : 'OFF'}**\n` +
          `チャンネル: ${joinSetting.channelId ? `<#${joinSetting.channelId}>` : '未設定'}\n` +
          `メッセージ: ${joinSetting.message || '未設定'}`,
      },
      {
        name: '📤 Leaveメッセージ',
        value:
          `状態: **${leaveSetting.enabled ? 'ON' : 'OFF'}**\n` +
          `チャンネル: ${leaveSetting.channelId ? `<#${leaveSetting.channelId}>` : '未設定'}\n` +
          `メッセージ: ${leaveSetting.message || '未設定'}`,
      },
      {
        name: '🛡️ スパムブロック',
        value:
          `状態: **${spamSetting.enabled ? 'ON' : 'OFF'}**\n` +
          `判定: **${spamSetting.detectionWindowSeconds}秒以内に${spamSetting.maxMessages}回送信で${spamSetting.timeoutMinutes}分タイムアウト（10秒以内のメッセージ削除）**\n` +
          `レポート先: ${spamSetting.reportChannelId ? `<#${spamSetting.reportChannelId}>` : '未設定（送信なし）'}\n` +
          `除外チャンネル: ${mentionList(spamSetting.ignoredChannelIds, 'channel')}\n` +
          `除外ロール: ${mentionList(spamSetting.ignoredRoleIds, 'role')}`,
      },
      {
        name: '✨ 自動リアクション',
        value:
          `状態: **${autoReactionSetting.enabled ? 'ON' : 'OFF'}**\n` +
          `対象チャンネル: ${mentionList(autoReactionSetting.channelIds, 'channel')}\n` +
          `絵文字: ${(autoReactionSetting.emojis || []).join(', ') || 'なし'}`,
      }
    );
  }

  return embed.addFields(
    {
      name: '🔗 ショートリンクブロック',
      value:
        `状態: **${shortLinkSetting.enabled ? 'ON' : 'OFF'}**\n` +
        '対象: bit.ly / tinyurl / t.co など主要短縮URL\n' +
        '許可: chatgpt.com / bot.com',
    },
    {
      name: '📈 XPシステム',
      value:
        `状態: **${xpSetting.enabled ? 'ON' : 'OFF'}**\n` +
        `通知チャンネル: ${xpSetting.notifyChannelId ? `<#${xpSetting.notifyChannelId}>` : '未設定（必須）'}\n` +
        `無効チャンネル: ${mentionList(xpSetting.ignoredChannelIds, 'channel')}\n` +
        '獲得量: 1発言ごとに 5〜10 XP',
    }
  );
}

function buildButtons(joinSetting, leaveSetting, spamSetting, autoReactionSetting, shortLinkSetting, xpSetting, page = PAGE_ONE) {
  const navigationRow = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId('settingpanel_page_1')
      .setLabel('◀ 1/2')
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(page === PAGE_ONE),
    new ButtonBuilder()
      .setCustomId('settingpanel_page_2')
      .setLabel('2/2 ▶')
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(page === PAGE_TWO)
  );

  if (page === PAGE_TWO) {
    const shortLinkRow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId('shortlink_toggle')
        .setLabel(shortLinkSetting.enabled ? 'ShortLinkBlock OFF' : 'ShortLinkBlock ON')
        .setStyle(shortLinkSetting.enabled ? ButtonStyle.Danger : ButtonStyle.Success)
    );

    const xpRow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId('xp_toggle')
        .setLabel(xpSetting.enabled ? 'XP OFF' : 'XP ON')
        .setStyle(xpSetting.enabled ? ButtonStyle.Danger : ButtonStyle.Success),
      new ButtonBuilder()
        .setCustomId('xp_open_modal')
        .setLabel('XP 設定')
        .setStyle(ButtonStyle.Secondary)
    );

    return [shortLinkRow, xpRow, navigationRow];
  }

  const joinRow = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId('joinmsg_toggle')
      .setLabel(joinSetting.enabled ? 'Join OFF' : 'Join ON')
      .setStyle(joinSetting.enabled ? ButtonStyle.Danger : ButtonStyle.Success),
    new ButtonBuilder()
      .setCustomId('joinmsg_open_modal')
      .setLabel('Join 設定')
      .setStyle(ButtonStyle.Primary)
  );

  const leaveRow = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId('leavemsg_toggle')
      .setLabel(leaveSetting.enabled ? 'Leave OFF' : 'Leave ON')
      .setStyle(leaveSetting.enabled ? ButtonStyle.Danger : ButtonStyle.Success),
    new ButtonBuilder()
      .setCustomId('leavemsg_open_modal')
      .setLabel('Leave 設定')
      .setStyle(ButtonStyle.Primary)
  );

  const spamRow = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId('spamblock_toggle')
      .setLabel(spamSetting.enabled ? 'SpamBlock OFF' : 'SpamBlock ON')
      .setStyle(spamSetting.enabled ? ButtonStyle.Danger : ButtonStyle.Success),
    new ButtonBuilder()
      .setCustomId('spamblock_open_modal')
      .setLabel('SpamBlock 設定')
      .setStyle(ButtonStyle.Secondary)
  );

  const reactionRow = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId('autoreact_toggle')
      .setLabel(autoReactionSetting.enabled ? 'AutoReact OFF' : 'AutoReact ON')
      .setStyle(autoReactionSetting.enabled ? ButtonStyle.Danger : ButtonStyle.Success),
    new ButtonBuilder()
      .setCustomId('autoreact_open_modal')
      .setLabel('AutoReact 設定')
      .setStyle(ButtonStyle.Secondary)
  );

  return [joinRow, leaveRow, spamRow, reactionRow, navigationRow];
}

function inferPanelPageFromMessage(message) {
  if (!message || !Array.isArray(message.components)) return PAGE_ONE;

  for (const row of message.components) {
    for (const component of row.components || []) {
      if (component.customId === 'settingpanel_page_2' && component.disabled) return PAGE_TWO;
      if (component.customId === 'settingpanel_page_1' && component.disabled) return PAGE_ONE;
    }
  }

  return PAGE_ONE;
}
