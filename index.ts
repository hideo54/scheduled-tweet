import Twitter from 'twitter';
import schedule from 'node-schedule';
import moment from 'moment';
import { promises as fs } from 'fs';
import dotenv from 'dotenv';
dotenv.config();

import schedules, { Schedule } from './schedules';

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY!,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET!,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY!,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET!,
});

let previousTweetId: string | undefined = undefined;

const tweet = async (client: Twitter, schedule: Schedule) => {
    const mediaIdStrings = schedule.images && await Promise.all(
        schedule.images.map(imagePath =>
            fs.readFile(imagePath).then(media =>
                client.post('media/upload', { media }).then(res =>
                    res.media_id_string as string
                )
            )
        )
    );
    try {
        const res = await client.post('statuses/update', {
            status: schedule.text,
            media_ids: mediaIdStrings?.join(','),
            in_reply_to_status_id: schedule.replyToPrevious ? previousTweetId : undefined,
        });
        previousTweetId = res.id_str;
    } catch (e) {
        console.error(e);
    }
};

schedule.scheduleJob('*/5 * * * *', async () => {
    const nowString = moment().format('YYYY-MM-DD HH:mm');
    const matchingSchedules = schedules.filter(schedule =>
        schedule.date === nowString
    );
    for (const matchingSchedule of matchingSchedules) {
        await tweet(client, matchingSchedule);
    }
});