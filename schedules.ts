import { stripIndent } from 'common-tags';

export interface Schedule {
    date: string;
    text: string;
    images?: string[];
}

const schedules: Schedule[] = [
    {
        date: '2020-09-06 20:30',
        text: stripIndent`
            テストツイート
            にひひ
        `,
        images: [
            'media/allyl-eigen.jpg',
        ],
    },
];

export default schedules;