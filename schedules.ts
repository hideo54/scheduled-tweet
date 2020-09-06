import { stripIndent } from 'common-tags';

export interface Schedule {
    date: string;
    text: string;
    images?: string[];
    replyToPrevious?: boolean;
}

const schedules: Schedule[] = [
    {
        date: '2020-09-06 21:30',
        text: stripIndent`
            てすと
        `,
    },
    {
        date: '2020-09-06 21:30',
        text: stripIndent`
            スレッドテスト
        `,
        replyToPrevious: true,
    },
    {
        date: '2020-09-06 21:30',
        text: stripIndent`
            ナナチ
        `,
    },
];

export default schedules;