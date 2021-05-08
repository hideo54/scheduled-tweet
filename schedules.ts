import { stripIndent } from 'common-tags';

export interface Schedule {
    date: string;
    text: string;
    images?: string[];
    replyToPrevious?: boolean;
}

const schedules: Schedule[] = [
    {
        date: '2021-05-08 17:00',
        text: stripIndent`
        TSG LIVE! まであと《7 日》!
        5/15(土) の 10 時からは【オープニングトーク】をお送りします!

        TSG の普段の活動を，ふぁぼん(@syobon_hinata)さんとゆうれい(@Shion_uts1)さんが紹介します!

        また今回は，TSG内で大流行中のゲームhangmanのbot開発者にインタビューを行う予定です!

        #tsg_live
        `,
        images: [
            'media/opening.png',
        ],
    },
    {
        date: '2021-05-09 17:00',
        text: stripIndent`
        TSG LIVE! まであと 《6 日》!
        5/15(土)の11:30からは，【ライブゲームプログラミング】をお送りします!

        Azaika(@azaika_) さんが，放送時間90分という短時間でゲームをゼロから完成させます!

        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/NXchTFJh2Js
        #tsg_live
        `,
        images: [
            'media/game.png',
        ],
    },
    {
        date: '2021-05-10 17:00',
        text: stripIndent`
        TSG LIVE! まであと 《5 日》!
        5/15(土)の13:30からは，【ライブコードゴルフ大会】をお送りします!
        
        お題のプログラムを短く書いた者が勝ち! 関東チームと関西チームが陣取り形式で対戦します!
        
        関東チーム: @T0_0WATSON, @NOCO_1002
        関西チーム: @661nos, @syobon_hinata
        #tsg_live
        `,
        images: [
            'media/golf.png',
        ],
    },
    {
        date: '2021-05-10 17:00',
        text: stripIndent`
        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/NXchTFJh2Js
        `,
        replyToPrevious: true,
    },
    {
        date: '2021-05-11 17:00',
        text: stripIndent`
        TSG LIVE! まであと 《4 日》!
        5/15(土) の 15:30 からは，【ライブ競プロ (マラソン)】をお送りします!
        
        出題されるのは，厳密な最適解を求めるのが困難な問題．制限時間内にどれだけ最適解に近づけたかを競います!
        
        プレイヤー: @ta1sa_, @drama_no_inu
        #tsg_live
        `,
        images: [
            'media/kyopro.png',
        ],
    },
    {
        date: '2021-05-11 17:00',
        text: stripIndent`
        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/NXchTFJh2Js
        `,
        replyToPrevious: true,
    },
    {
        date: '2021-05-12 17:00',
        text: stripIndent`
        TSG LIVE! まであと 《3 日》!
        5/16(日) の 10:30 からは，【ライブゲームプログラミング】!
        
        hideo54(@hideo54) さんが，放送時間内にゲームをゼロから完成させます!

        今回は，視聴者の皆さんが完成途中のゲームをリアルタイムでプレイできるようになる予定です!
        #tsg_live
        `,
        images: [
            'media/game2.png',
        ],
    },
    {
        date: '2021-05-12 17:00',
        text: stripIndent`
        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/oitn3AiP6bM
        `,
        replyToPrevious: true,
    },
    {
        date: '2021-05-13 17:00',
        text: stripIndent`
        TSG LIVE! まであと 《2 日》!
        5/16(日) の 12:30 からは，【ライブコードゴルフ大会】!
        
        お題のプログラムをいかに短く書けるかを競う大会です！今回も esolang (難解プログラミング言語) が多数登場！
        
        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/oitn3AiP6bM
        #tsg_live
        `,
        images: [
            'media/golf2.png',
        ],
    },
    {
        date: '2021-05-13 17:00',
        text: stripIndent`
        さらに今回，TSG 外部から強豪コードゴルファーのDNEK(@dnek_)さん，aotsuki(@RikuAotsuki)さん，ten986(@ten986)さんを【TSG LIVE! 6】にご招待！TSGチームと真剣勝負していただきます！

        現れた強敵に TSG チームは勝利することができるのか? ぜひお楽しみください！
        #tsg_live
        `,
        replyToPrevious: true,
    },
    {
        date: '2021-05-14 17:00',
        text: stripIndent`
        TSG LIVE!　まであと 《1 日》!
        5/16(日) の 14:30 からは，【ライブ CTF】!
        
        CTF 主催経験のある TSG が作問した問題に部員たちが挑みます！
        crypto，web，pwn 等，様々なジャンルの問題が出題される予定です！
        #tsg_live
        `,
        images: [
            'media/ctf.png',
        ],
    },
    {
        date: '2021-05-14 17:00',
        text: stripIndent`
        今回は，TSG 外部から CTF 強豪プレイヤーのpwnyaa(@pwnyaa)さん，furutsuki(@theoremoon)さん，kurenaif(@fwarashi)さんにお越しいただき，TSGチームと真剣勝負していただきます！

        果たして勝利はどちらのチームの手に?
        #tsg_live
        `,
        replyToPrevious: true,
    },
    {
        date: '2021-05-14 17:00',
        text: stripIndent`
        さらに，視聴者の皆さんも https://live-ctf.tsg.ne.jp より CTF に参加し，プレイヤー達と腕前を競うことができます！腕に覚えのある皆様のご参加をお待ちしております！

        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/oitn3AiP6bM
        #tsg_live
        `,
        replyToPrevious: true,
    },
    {
        date: '2021-05-15 06:00',
        text: stripIndent`
        おはようございます! 本日 10 時からプログラミング生放送【TSG LIVE! 6】が放送されます。是非お楽しみください!

        #tsg_live で拡散よろしくお願いします!

        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/NXchTFJh2Js
        `,
    },
    {
        date: '2021-05-15 09:00',
        text: stripIndent`
        おはようございます! 本日 10 時からプログラミング生放送【TSG LIVE! 6】が放送されます。是非お楽しみください!

        #tsg_live で拡散よろしくお願いします!

        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/NXchTFJh2Js
        `,
    },
    {
        date: '2021-05-15 09:50',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 6】
        まもなく 10 時から「オープニングトーク」が始まります！

        パーソナリティ: ふぁぼん (@syobon_hinata)，ゆうれい (@Shion_uts1)
        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/NXchTFJh2Js
        #tsg_live
        `,
        images: [
            'media/opening.png',
        ],
    },
    {
        date: '2021-05-15 10:20',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 6】
        ただいま「オープニングトーク」を放送中です！

        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/NXchTFJh2Js
        #tsg_live
        `,
        images: [
            'media/opening.png',
        ],
    },
    {
        date: '2021-05-15 11:10',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 6】
        「オープニングトーク」無事終了しました! https://q.tsg.ne.jp から視聴者アンケートにご協力ください！

        このあとは 11:30 から「ライブゲームプログラミング」です!
        #tsg_live
        `,
    },
    {
        date: '2021-05-15 11:10',
        text: stripIndent`
        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/NXchTFJh2Js
        `,
        replyToPrevious: true,
    },
    {
        date: '2021-05-15 11:20',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 6】
        まもなく 11:30 から「ライブゲームプログラミング」が始まります。Azaika(@azaika_) さんが90分で一つのゲームを完成させます！

        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/NXchTFJh2Js
        #tsg_live
        `,
        images: [
            'media/game.png',
        ],
    },
    {
        date: '2021-05-15 12:00',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 6】
        ただいま「ライブゲームプログラミング」を放送中です!

        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/NXchTFJh2Js
        #tsg_live
        `,
        images: [
            'media/game.png',
        ],
    },
    {
        date: '2021-05-15 13:10',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 6】
        「ライブゲームプログラミング」無事終了しました! https://q.tsg.ne.jp から視聴者アンケートにご協力ください！

        このあとは 13:30 から「ライブコードゴルフ大会」です!
        #tsg_live
        `,
    },
    {
        date: '2021-05-15 13:10',
        text: stripIndent`
        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/NXchTFJh2Js
        `,
        replyToPrevious: true,
    },
    {
        date: '2021-05-15 13:20',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 6】
        まもなく 13:30 から「ライブコードゴルフ大会」が始まります。とにかくプログラムを短く書けるなら何でもありの異種格闘技戦! 白熱した陣取りゲームを是非ご覧ください!
        #tsg_live
        `,
        images: [
            'media/golf.png',
        ],
    },
    {
        date: '2021-05-15 13:20',
        text: stripIndent`
        関東チーム: @T0-0WATSON, @NOCO_1002
        関西チーム: @661nos, @syobon_hinata

        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/NXchTFJh2Js
        `,
        replyToPrevious: true,
    },
    {
        date: '2021-05-15 14:00',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 6】
        ただいま「ライブコードゴルフ大会」を放送中です!

        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/NXchTFJh2Js
        #tsg_live
        `,
        images: [
            'media/golf.png',
        ],
    },
    {
        date: '2021-05-15 15:10',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 6】
        「ライブコードゴルフ大会」無事終了しました! https://q.tsg.ne.jp から視聴者アンケートにご協力ください！

        このあとは 15:30 から「ライブ競技プログラミング(マラソン)」です!
        #tsg_live
        `,
    },
    {
        date: '2021-05-15 15:20',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 6】
        まもなく 15:30 から「ライブ競技プログラミング(マラソン)」が始まります。決められた時間の中で極限までプログラムを最適化するバトル! プログラマたちのスゴ技を是非ご覧ください！
        #tsg_live
        `,
        images: [
            'media/kyopro.png',
        ],
    },
    {
        date: '2021-05-15 15:20',
        text: stripIndent`
        プレイヤー: @ta1sa_，@drama_no_inu

        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/NXchTFJh2Js
        `,
        replyToPrevious: true,
    },
    {
        date: '2021-05-15 16:00',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 6】
        ただいま「ライブ競技プログラミング(マラソン)」を放送中です!

        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/NXchTFJh2Js
        #tsg_live
        `,
        images: [
            'media/kyopro.png',
        ],
    },
    {
        date: '2021-05-15 17:30',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 6】
        本日の全プログラムが無事終了いたしました。ご視聴いただきありがとうございました! https://q.tsg.ne.jp から視聴者アンケートにご協力ください!
        
        【TSG LIVE! 6】Day 2 は明日 10:30 開始です！お見逃しのないように!
        #tsg_live
        `,
    },
    {
        date: '2021-05-15 17:30',
        text: stripIndent`
        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/oitn3AiP6bM
        `,
        replyToPrevious: true,
    },
    {
        date: '2021-05-16 06:00',
        text: stripIndent`
        おはようございます! 本日は 10:30 からプログラミング生放送【TSG LIVE! 6】が始まります。是非お楽しみください!

        #tsg_live で拡散よろしくお願いします!

        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/oitn3AiP6bM
        `,
    },
    {
        date: '2021-05-16 09:00',
        text: stripIndent`
        おはようございます! 本日は 10:30 からプログラミング生放送【TSG LIVE! 6】が始まります。是非お楽しみください!

        #tsg_live で拡散よろしくお願いします!

        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/oitn3AiP6bM
        `,
    },
    {
        date: '2021-05-16 10:20',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 6】
        まもなく 10:30 から「ライブゲームプログラミング」が始まります！
        
        hideo54 (@hideo54) さんが 90 分という短時間でゼロからゲームを作ります！
        
        今回は，完成途中のゲームを視聴者の皆さんがリアルタイムでプレイできます！
        #tsg_live
        `,
        images: [
            'media/game2.png',
        ],
    },
    {
        date: '2021-05-16 10:20',
        text: stripIndent`
        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/oitn3AiP6bM
        `,
        replyToPrevious: true,
    },
    {
        date: '2021-05-16 11:00',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 6】
        ただいま「ライブゲームプログラミング」を放送中です!

        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/oitn3AiP6bM
        #tsg_live
        `,
        images: [
            'media/game2.png',
        ],
    },
    {
        date: '2021-05-16 12:10',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 6】
        「ライブゲームプログラミング」無事終了しました! https://q.tsg.ne.jp から視聴者アンケートにご協力ください！

        このあとは 12:30 から「ライブコードゴルフ大会」です!
        #tsg_live
        `,
    },
    {
        date: '2021-05-16 12:10',
        text: stripIndent`
        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/oitn3AiP6bM
        `,
        replyToPrevious: true,
    },
    {
        date: '2021-05-16 12:20',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 6】

        まもなく 12:30 から「ライブコードゴルフ大会」が始まります。2 日目の今日は東大の外部から強豪コードゴルファーの三人にお越しいただきました!手に汗握る熱戦となること間違いなし！是非見に来てください!
        #tsg_live
        `,
        images: [
            'media/golf2.png',
        ],
    },
    {
        date: '2021-05-16 12:20',
        text: stripIndent`
        TSG チーム: @sitositositoo，@u6606u5e03，@syobon_hinata
        外部チーム: @dnek_，@RikuAotsuki，@ten986

        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/oitn3AiP6bM
        #tsg_live
        `,
        replyToPrevious: true,
    },
    {
        date: '2021-05-16 13:00',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 6】
        ただいま「ライブコードゴルフ大会」を放送中です!

        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/oitn3AiP6bM
        #tsg_live
        `,
        images: [
            'media/golf2.png',
        ],
    },
    {
        date: '2021-05-16 14:10',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 6】
        「ライブコードゴルフ大会」無事終了しました! https://q.tsg.ne.jp から視聴者アンケートにご協力ください！

        このあとは 14:30 から「ライブCTF」です!
        #tsg_live
        `,
    },
    {
        date: '2021-05-16 14:10',
        text: stripIndent`
        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/oitn3AiP6bM
        `,
        replyToPrevious: true,
    },
    {
        date: '2021-05-16 14:20',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 6】
        まもなく 14:30 から「ライブ CTF」が始まります。

        ハッキング技術を競うアツい戦いです！東大外部から強豪プレイヤーを 3 人お招きしたほか，視聴者のみなさんもCTFに並行して参加できます！是非お楽しみください！
        #tsg_live
        `,
        images: [
            'media/ctf.png',
        ],
    },
    {
        date: '2021-05-16 14:20',
        text: stripIndent`
        外部プレイヤー: @pwnyaa，@theoremoon，@fwarashi

        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/oitn3AiP6bM
        `,
        replyToPrevious: true,
    },
    {
        date: '2021-05-16 15:00',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 6】

        ただいま「ライブCTF」を放送中です!

        公式サイト: https://live.tsg.ne.jp
        配信URL: https://youtu.be/oitn3AiP6bM
        #tsg_live
        `,
        images: [
            'media/ctf.png',
        ],
    },
    {
        date: '2021-05-16 16:40',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 6】の全プログラムが無事終了いたしました! ご視聴いただき本当にありがとうございました!

        https://q.tsg.ne.jp から視聴者アンケートにご協力ください！見逃した方もアーカイブ配信をお楽しみください!
        #tsg_live
        `,
    },
];

export default schedules;
