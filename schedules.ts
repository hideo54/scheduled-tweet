import { stripIndent } from 'common-tags';

export interface Schedule {
    date: string;
    text: string;
    images?: string[];
    replyToPrevious?: boolean;
}

const schedules: Schedule[] = [
    {
        date: '2020-09-20 06:00',
        text: stripIndent`
        おはようございます! 本日10時からプログラミング生放送【TSG LIVE! 5】放送開始です。本放送は2日間にわたって行われます。スケジュールは画像にてご確認ください。是非お楽しみください!
        #tsg_live で拡散よろしくお願いします!
        https://www.youtube.com/watch?v=8ct9j_hEZTk
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/programs.png',
        ], 
    },
    {
        date: '2020-09-20 09:00',
        text: stripIndent`
        おはようございます! 本日10時からプログラミング生放送【TSG LIVE! 5】放送開始です。本放送は2日間にわたって行われます。スケジュールは画像にてご確認ください。是非お楽しみください!
        #tsg_live で拡散よろしくお願いします!
        https://www.youtube.com/watch?v=8ct9j_hEZTk
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/programs.png',
        ], 
    },
    {
        date: '2020-09-20 09:50',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        まもなく10時から「オープニングトーク」が始まります。毎度好評を頂いているミニゲーム「たほいや」も行われますよ!
        是非ご覧ください！
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/opening.png',
        ],
    },
    {
        date: '2020-09-20 10:25',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        ただいま「オープニングトーク」を放送中です!
        https://www.youtube.com/watch?v=8ct9j_hEZTk
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/opening.png',
        ],
    },
    {
        date: '2020-09-20 10:55',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        ただいま「オープニングトーク」を放送中です!
        https://www.youtube.com/watch?v=8ct9j_hEZTk
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/opening.png',
        ],
    },
    {
        date: '2020-09-20 11:30',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        「オープニングトーク」無事終了しました! このあとは12時から「ライブゲームプログラミング」です!
        https://q.tsg.ne.jp から視聴者アンケートにご協力ください！
        https://www.youtube.com/watch?v=8ct9j_hEZTk
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/gameprograming.png',
        ],
    },
    {
        date: '2020-09-20 11:50',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        まもなく12時から「ライブゲームプログラミング」が始まります。プログラミングを得意とする部員が90分で一つのゲームを完成させます！試行錯誤して創作する楽しさをみなで共有しませんか？最後に出来上がる作品は必見です！
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/gameprograming.png',
        ],
    },
    {
        date: '2020-09-20 12:25',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        ただいま「ライブゲームプログラミング」を放送中です!
        https://www.youtube.com/watch?v=8ct9j_hEZTk
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/gameprograming.png',
        ],
    },
    {
        date: '2020-09-20 12:55',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        ただいま「ライブゲームプログラミング」を放送中です!
        https://www.youtube.com/watch?v=8ct9j_hEZTk
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/gameprograming.png',
        ],
    },
    {
        date: '2020-09-20 13:30',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        「ライブゲームプログラミング」無事終了しました! このあとは14時から「ライブコードゴルフ大会」です!
        https://q.tsg.ne.jp から視聴者アンケートにご協力ください！
        https://www.youtube.com/watch?v=8ct9j_hEZTk
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/codegolf.png',
        ],
    },
    {
        date: '2020-09-20 13:50',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        まもなく14時から「ライブコードゴルフ大会」が始まります。とにかくプログラムを短く書けるなら何でもありの異種格闘技戦! 白熱した陣取りゲームを是非ご覧ください!        
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/codegolf.png',
        ],
    },
    {
        date: '2020-09-20 14:25',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        ただいま「ライブコードゴルフ大会」を放送中です!
        https://www.youtube.com/watch?v=8ct9j_hEZTk
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/codegolf.png',
        ],
    },
    {
        date: '2020-09-20 14:55',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        ただいま「ライブコードゴルフ大会」を放送中です!
        https://www.youtube.com/watch?v=8ct9j_hEZTk
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/codegolf.png',
        ],
    },
    {
        date: '2020-09-20 15:30',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        「ライブコードゴルフ大会」無事終了しました! このあとは16時から「ライブ競技プログラミング(マラソン)」です!
        https://q.tsg.ne.jp から視聴者アンケートにご協力ください！
        https://www.youtube.com/watch?v=8ct9j_hEZTk     
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/marathon.png',
        ],
    },
    {
        date: '2020-09-20 15:50',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        まもなく16時から「ライブ競技プログラミング(マラソン)」が始まります。決められた時間の中で極限までプログラムを最適化するバトル! プログラマーたちのスゴ技を是非ご覧ください！
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/marathon.png',
        ],
    },
    {
        date: '2020-09-20 16:25',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        ただいま「ライブ競技プログラミング(マラソン)」を放送中です!
        https://www.youtube.com/watch?v=8ct9j_hEZTk
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/marathon.png',
        ],
    },
    {
        date: '2020-09-20 16:55',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        ただいま「ライブ競技プログラミング(マラソン)」を放送中です!
        https://www.youtube.com/watch?v=8ct9j_hEZTk
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/marathon.png',
        ],
    },
    {
        date: '2020-09-20 17:30',
        text: stripIndent`
        本日の全プログラムが無事終了いたしました。ご視聴いただきありがとうございました!https://q.tsg.ne.jp から視聴者アンケートにご協力ください!五月祭2日目のプログラミング生放送【TSG LIVE! 5】は明日の10:00開始です。お見逃しのないように!
        #五月祭 #オンライン五月祭 #tsg_live
        `,
    },
    {
        date: '2020-09-21 06:00',
        text: stripIndent`
        おはようございます! 本日も10時からプログラミング生放送【TSG LIVE! 5】が始まります。スケジュールは画像(2日目)にてご確認ください。是非お楽しみください!
        #tsg_live で拡散よろしくお願いします!
        https://www.youtube.com/watch?v=HPgan1Ut6b8
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/programs.png',
        ],
    },
    {
        date: '2020-09-21 09:00',
        text: stripIndent`
        おはようございます! 本日も10時からプログラミング生放送【TSG LIVE! 5】が始まります。スケジュールは画像(2日目)にてご確認ください。是非お楽しみください!
        #tsg_live で拡散よろしくお願いします!
        https://www.youtube.com/watch?v=HPgan1Ut6b8
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/programs.png',
        ],
    },
    {
        date: '2020-09-21 09:50',
        text: stripIndent`
        まもなく10時から「ライブゲームプログラミング」が始まります。
        プログラミングを得意とする部員が90分で一つのゲームを完成させます！以下のURLからリアルタイムでゲームを遊ぶことができます。
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/gameprograming.png',
        ],
    },
    {
        date: '2020-09-21 10:25',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        ただいま「ライブゲームプログラミング」を放送中です!
        https://www.youtube.com/watch?v=HPgan1Ut6b8
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/gameprograming.png',
        ],
    },
    {
        date: '2020-09-21 10:55',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        ただいま「ライブゲームプログラミング」を放送中です!
        https://www.youtube.com/watch?v=HPgan1Ut6b8
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/gameprograming.png',
        ],
    },
    {
        date: '2020-09-21 11:30',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        「ライブゲームプログラミング」無事終了しました! このあとは12時から「ライブコードゴルフ大会」です!
        https://q.tsg.ne.jp から視聴者アンケートにご協力ください！
        https://www.youtube.com/watch?v=HPgan1Ut6b8
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/codegolf.png',
        ],
    },
    {
        date: '2020-09-21 11:50',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        まもなく12時から「ライブコードゴルフ大会」が始まります。2日目の今日は東大の外から天才コードゴルファーのお二人にお越しいただきました!手に汗握る熱戦となること間違いなし！是非見に来てください!
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/codegolf.png',
        ],
    },
    {
        date: '2020-09-21 12:25',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        ただいま「ライブコードゴルフ大会」を放送中です!
        https://www.youtube.com/watch?v=HPgan1Ut6b8
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/codegolf.png',
        ],
    },
    {
        date: '2020-09-21 12:55',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        ただいま「ライブコードゴルフ大会」を放送中です!
        https://www.youtube.com/watch?v=HPgan1Ut6b8
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/codegolf.png',
        ],
    },
    {
        date: '2020-09-21 13:30',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        「ライブコードゴルフ大会」無事終了しました!このあとは14時から「ライブCTF」です!
        https://q.tsg.ne.jp から視聴者アンケートにご協力ください！
        https://www.youtube.com/watch?v=HPgan1Ut6b8
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/ctf.png',
        ],
    },
    {
        date: '2020-09-21 13:50',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        まもなく14時から「ライブCTF」が始まります。
        ハッキング技術を競うアツい戦いです！視聴者のみなさんもCTFに並行して参加できますので、腕試しに如何でしょうか！是非見にきてください！
        https://live-ctf.tsg.ne.jp
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/ctf.png',
        ],
    },
    {
        date: '2020-09-21 14:25',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        ただいま「ライブCTF」を放送中です!
        https://www.youtube.com/watch?v=HPgan1Ut6b8
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/ctf.png',
        ],
    },
    {
        date: '2020-09-21 14:55',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        ただいま「ライブCTF」を放送中です!
        https://www.youtube.com/watch?v=HPgan1Ut6b8
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/ctf.png',
        ],
    },
    {
        date: '2020-09-21 15:30',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        「ライブCTF」無事終了しました!このあとは16時から「ライブハッキング」です!
        https://q.tsg.ne.jp から視聴者アンケートにご協力ください！
        https://www.youtube.com/watch?v=HPgan1Ut6b8
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/hacking.png',
        ],
    },
    {
        date: '2020-09-21 15:50',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        まもなく16時から「ライブハッキング」が始まります。初夏に開かせて頂いたTSG CTF 2020の解説放送も行われますよ!
        TSGのセキュリティ技術の集大成を是非ご覧ください！
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/hacking.png',
        ],
    },
    {
        date: '2020-09-21 16:25',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        ただいま「ライブハッキング」を放送中です!
        https://www.youtube.com/watch?v=HPgan1Ut6b8
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/hacking.png',
        ],
    },
    {
        date: '2020-09-21 16:55',
        text: stripIndent`
        プログラミング生放送【TSG LIVE! 5】
        ただいま「ライブハッキング」を放送中です!
        https://www.youtube.com/watch?v=HPgan1Ut6b8
        #五月祭 #オンライン五月祭 #tsg_live
        `,
        images: [
            'media/hacking.png',
        ],
    },
    {
        date: '2020-09-21 17:30',
        text: stripIndent`
        【TSG LIVE! 5】の全プログラムが無事終了いたしました! ご視聴いただき本当にありがとうございました!
        https://q.tsg.ne.jp から視聴者アンケートにご協力ください！見逃した方もアーカイブ配信と後日upされるコーナーごとの動画を是非ご利用ください!
        #五月祭 #オンライン五月祭 #tsg_live
        `,
    },
];

export default schedules;