# vc_notification_bot

"vc_notification_bot" は、Discord ボイスチャンネルの開始・終了を検知し、通知をテキストチャンネルに送信するためのコード群です。

- 特定のボイスチャンネルのみ通知を受けとりたい
- サーバーのメンバー全員が分かるようにしたい

このような方に有用です。

## 利用方法

Discord の bot をあらかじめ作成し、トークンを取得しておいてください。

### Glitch

1. [Glitch](https://glitch.com)にアクセスし、アカウントを作成します。
2. New Project → Import from Github を選択し、このリポジトリでの **HTTPS** の URL（ https://github.com/tuduraebira/vc_notification_bot.git ）を入力します。
3. ファイルの中にある ".env" に、Discord のトークン、テキストチャンネルの ID、ボイスチャンネルの ID （いくつでも可）を次のように設定します。

|          変数名           |             値の内容             |
| :-----------------------: | :------------------------------: |
|     DISCORD_BOT_TOKEN     |    Discord の bot のトークン     |
|      TEXT_CHANNEL_ID      |     テキストチャンネルの ID      |
|     VOICE_CHANNEL_ID      |      ボイスチャンネルの ID       |
| VOICE_CHANNEL2_ID（任意） | ボイスチャンネル 2 の ID（任意） |

4. "code.js" の中にある、"voiceChannelIds" の中身を 3. で設定した変数名に変更してください。
5. Share ボタンから Live site の URL をコピーしメモしておきます。

### Google Apps Script

1. Google アカウントを作成し、Google ドライブにアクセスします。
2. 新規 → その他 → Google Apps Script を選択しファイルを作成します。
3. gas/gas.gs のコードをコピーし、先程のファイルに貼り付けます。
4. コードの中にある "URL" の値を、上記で作成した Glitch の URL に変更します。
5. 左のサイドバーにあるトリガーを選択し、トリガーを追加を押します。
6. "時間ペースのトリガーのタイプを選択" の部分を "分ベースのタイマー"、"時間の間隔を選択"を "5 分おき" 程度にし、保存します。
7. アカウントのアクセスを許可すれば完了です。

## 参考

- [discord.js | Documentation](https://discord.js.org/#/docs/discord.js/main/general/welcome)
- [Discord.js Japan User Group](https://scrapbox.io/discordjs-japan/)
