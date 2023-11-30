const Twitter = require('twitter-v2');
require('dotenv').config();


const consumer_key = process.env.TWITTER_CLIENT_ID;
const consumer_secret = process.env.TWITTER_CLIENT_SECRET;
const access_token_key = process.env.TWITTER_ACCESS_TOKEN;
const access_token_secret = process.env.TWITTER_ACCESS_TOKEN_SECRET;

const client = new Twitter({
  consumer_key,
  consumer_secret,
  access_token_key,
  access_token_secret,
});


const func = async () => {
    try {
        const { data } = await client.get('tweets', { ids: '1582107509577302016' });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

func().then((d) =>{

}).catch((e) => console.log(e))

