//READMORE: https://github.com/PLhery/node-twitter-api-v2
const { TwitterApi } = require('twitter-api-v2');
require('dotenv').config();

const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;
const TWITTER_ACCESS_TOKEN = process.env.TWITTER_ACCESS_TOKEN
// Instantiate with desired auth type (here's Bearer v2 auth)
const twitterClient = new TwitterApi(TWITTER_ACCESS_TOKEN);


const tweet = async (msg) => {
    await twitterClient.v2.tweet(msg);  // 'Hello!'
};

const tweetMsg = "reuse is happening at scale";
tweet(tweetMsg).then((d) => {
    console.log(d);
}).catch((error) => {
    console.log(error);
});

const userByUsername = async (username) => {
    const readOnlyClient = twitterClient.readOnly; // Tell typescript it's a readonly app
    return await readOnlyClient.v2.userByUsername(username); //'plhery'
};

const uploadMedia = async (path) => {
    const readOnlyClient = twitterClient.readOnly;
    return await readOnlyClient.v2.uploadMedia(path); //'./big-buck-bunny.mp4'
};

