import fs from 'fs';
import Twitter from 'twitter';

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_API_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_API_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const base64Image = fs.readFileSync('banner.png', 'base64');

await client.post('account/update_profile_banner', {
    banner: base64Image
});