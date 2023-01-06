const { Client, GatewayIntentBits } = require("discord.js");

// 指定したインテンツを持つクライアントを作成
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
  ],
});

// ボットが準備完了
client.on("ready", () => {
  console.log("Bot準備完了");
});

// ボイスチャンネルで変化を検知
client.on("voiceStateUpdate", async (oldState, newState) => {
  // 開始・終了を判定するボイスチャンネルのID
  const voiceChannelIds = [
    process.env.VOICE_CHANNEL_GENERAL_ID,
    process.env.VOICE_CHANNEL_GAME_ID,
  ];
  // IDで指定したチャンネルを取得
  const textChannel = client.channels.cache.get(process.env.TEXT_CHANNEL_ID);

  // 指定したボイスチャンネルで通話が開始
  if (oldState.channelId == undefined && newState.channelId != undefined) {
    if (voiceChannelIds.includes(newState.channelId)) {
      const voiceChannel = client.channels.cache.get(newState.channelId);
      if (voiceChannel.members.size == 1) {
        // 指定したテキストチャンネルに開始メッセージを送信
        textChannel.send(`${newState.channel.name} で通話が開始されました`);
      }
    }
  }

  // 指定したボイスチャンネルで通話が終了
  if (oldState.channelId != undefined && newState.channelId == undefined) {
    if (voiceChannelIds.includes(oldState.channelId)) {
      const voiceChannel = client.channels.cache.get(oldState.channelId);
      if (voiceChannel.members.size == 0) {
        // 指定したテキストチャンネルに終了メッセージを送信
        textChannel.send(`${oldState.channel.name} で通話が終了されました`);
      }
    }
  }
});

// ボットをログインさせる
client.login(process.env.DISCORD_BOT_TOKEN);
