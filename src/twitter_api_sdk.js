const { Client, auth } = require("twitter-api-sdk");
require('dotenv').config();

// Initialize auth client first
const authClient = new auth.OAuth2User({
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    client_id: process.env.TWITTER_CLIENT_ID,
    client_secret: process.env.TWITTER_CLIENT_SECRET,
    callback: "",
    scopes: ["tweet.read", "users.read", "offline.access"],
   });

const client = new Client(authClient);

async function main() {
  const tweet = await client.tweets.findTweetById("1582107509577302016");
  console.log(tweet);
}

main();



/**
 * 
Initialize auth client first
const authClient = new auth.OAuth2User({
 client_id: process.env.CLIENT_ID as string,
 client_secret: process.env.CLIENT_SECRET as string,
 callback: "YOUR-CALLBACK",
 scopes: ["tweet.read", "users.read", "offline.access"],
});

 // Pass auth credentials to the library client 
 const twitterClient = new Client(authClient);
 */