const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  MessageFlags,
} = require("discord.js");
const { getGuildJoinSetting } = require("../utils/joinMessageSettings");
const { getGuildLeaveSetting } = require("../utils/leaveMessageSettings");

function buildPanel(joinSetting, leaveSetting) {
  return new EmbedBuilder()
    .setColor("Blue")
    .setTitle("⚙️ サーバー設定パネル")
    .setDescription("Join / Leave メッセージをこのパネルからまとめて設定できます。")
    .addFields(
      {
        name: "📥 Joinメッセージ",
        value:
          `状態: **${joinSetting.enabled ? "ON" : "OFF"}**\n` +
          `チャンネル: ${joinSetting.channelId ? `<#${joinSetting.channelId}>` : "未設定"}\n` +
          `メッセージ: ${joinSetting.message || "未設定"}`,
      },
      {
        name: "📤 Leaveメッセージ",
        value:
          `状態: **${leaveSetting.enabled ? "ON" : "OFF"}**\n` +
          `チャンネル: ${leaveSetting.channelId ? `<#${leaveSetting.channelId}>` : "未設定"}\n` +
          `メッセージ: ${leaveSetting.message || "未設定"}`,
      }
    )
    .setFooter({
      text: "[user] = ユーザー表示 / [membercount] = サーバー人数",
    });
}

function buildButtons(joinSetting, leaveSetting) {
  const joinRow = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("joinmsg_toggle")
      .setLabel(joinSetting.enabled ? "Join OFF" : "Join ON")
      .setStyle(joinSetting.enabled ? ButtonStyle.Danger : ButtonStyle.Success),
    new ButtonBuilder()
      .setCustomId("joinmsg_open_modal")
      .setLabel("Join 設定")
      .setStyle(ButtonStyle.Primary)
  );

  const leaveRow = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("leavemsg_toggle")
      .setLabel(leaveSetting.enabled ? "Leave OFF" : "Leave ON")
      .setStyle(leaveSetting.enabled ? ButtonStyle.Danger : ButtonStyle.Success),
    new ButtonBuilder()
      .setCustomId("leavemsg_open_modal")
      .setLabel("Leave 設定")
      .setStyle(ButtonStyle.Primary)
  );

  return [joinRow, leaveRow];
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("settingpanel")
    .setDescription("サーバー設定パネルを開きます（Join/Leave）")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction) {
    if (!interaction.member.permissions.has(PermissionFlagsBits.Administrator)) {
      return interaction.reply({
        content: "❌ 管理者のみ使用できます。",
        flags: MessageFlags.Ephemeral,
      });
    }

    const joinSetting = getGuildJoinSetting(interaction.guild.id);
    const leaveSetting = getGuildLeaveSetting(interaction.guild.id);

    await interaction.reply({
      embeds: [buildPanel(joinSetting, leaveSetting)],
      components: buildButtons(joinSetting, leaveSetting),
      flags: MessageFlags.Ephemeral,
    });
  },

  buildPanel,
  buildButtons,
};
