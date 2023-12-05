import { Client, auth } from "twitter-api-sdk";
import {} from 'dotenv/config';

const authClient = new auth.OAuth2User({
    client_id: process.env.TWITTER_CLIENT_ID,
    client_secret: process.env.TWITTER_CLIENT_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    callback: "http://127.0.0.1:3000/callback",
    scopes: ["tweet.read", "users.read", "offline.access"],
  });
const client = new Client(authClient);

(async () => {
    try {
      const getCurrentUser = await client.users.findMyUser();
      console.dir(getCurrentUser, {
        depth: null,
      });
    } catch (error) {
      console.log(error);
    }
  })();

/**
node src/twitter-api-typescript-sdk/confidentialClient.js
*/