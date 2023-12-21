import { getDetailedTweet } from "../utils/detailedTweet.js";
import { oAuthAccessToken } from "./helpers/oauth.js";
import { getPinBasedOauthAccessToken } from "./helpers/pinBasedOauth.js";
import { postRequest } from "./helpers/requests.js";

const SETTINGS = {
    useRequestTokenPin: false
};

/**
* In the data object, you can also add parameters to post 
* polls, quote Tweets, Tweet with reply settings, 
* and Tweet to Super Followers in addition to other features.
*/
const data = {
    "text": getDetailedTweet() || "sample tweet"
};
  
const endpointURL = `https://api.twitter.com/2/tweets`;

(async () => {
    try {

      if(SETTINGS.useRequestTokenPin) {
        oAuthAccessToken = await getPinBasedOauthAccessToken();
      }
  
      // Make the request
      const response = await postRequest(oAuthAccessToken, endpointURL, data);
      console.dir(response, {
        depth: null
      });
    } catch (e) {
      console.log(e.message);
      process.exit(-1);
    }
    process.exit();
  })();

/**
node src/twitter-api-v2/postTweet.js
 */