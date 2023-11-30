//READMORE: https://github.com/PLhery/node-twitter-api-v2
const { TwitterApi } = require('twitter-api-v2');
require('dotenv').config();

const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;
const TWITTER_ACCESS_TOKEN = process.env.TWITTER_ACCESS_TOKEN
// Instantiate with desired auth type (here's Bearer v2 auth)
const twitterClient = new TwitterApi(TWITTER_ACCESS_TOKEN);


const tweet = async (msg) => {
    try {
        await twitterClient.v2.tweet(msg);  // 'Hello!'
    } catch (error) {
        console.log(error);
    }
};

const tweetMsg = "reuse is happening at scale";
tweet(tweetMsg).then((d) => {
    console.log(d);
}).catch((error) => {
    console.log(error);
});

const userByUsername = async (username) => {
    try {
        const readOnlyClient = twitterClient.readOnly; // Tell typescript it's a readonly app
        return await readOnlyClient.v2.userByUsername(username); //'plhery'
    } catch (error) {
        console.log(error);
    }
};

const uploadMedia = async (path) => {
    try {

        const readOnlyClient = twitterClient.readOnly;
        return await readOnlyClient.v2.uploadMedia(path); //'./big-buck-bunny.mp4'
    } catch (error) {
        console.log(error);
    }
};

