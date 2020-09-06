# scheduled-tweet

画像アップロードやスレッド機能 (リプライツリー) にも対応した、ツイート自動化ツール。

## ツイートの登録のしかた

`schedules.ts` 内の `schedules` 配列を編集します。

* `date`: ツイートしたい時刻を `YYYY-MM-DD HH:mm` 形式で入力します。形式が正当かつ5分刻みである必要があります。
* `text`: ツイート本文を入力します。
* `images` (Optional): 画像を添付したい場合、その画像へのパスの文字列を配列にして入力します。`media/` 内に入れるのがおすすめです。
* `replyToPrevious` (Optional, default: `false`): `true` にすると、配列の直前のツイートへのリプライという形で投稿します。

## 走らせ方

1. `cp .env.example .env`
1. `.env` を編集し、Twitter API を叩くのに必要な各キーを設定
1. `npm i`
1. 上記のツイート登録を済ませる (変更の際は、以下のみでよい)
1. `npm run build`
1. `node index.js` または永続化 (pm2 などを用いる)
