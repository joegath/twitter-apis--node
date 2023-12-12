import { oAuthAccessToken as defaultAccessToken } from "./helpers/oauth.js";
import { getRequest } from "./helpers/requests.js";

const SETTINGS = {
    useRequestTokenPin: false
};

// These are the parameters for the API request
// specify Tweet IDs to fetch, and any additional fields that are required
// by default, only the Tweet ID and text are returned
const userFieldsParams = "created_at,description,verified,location";
const expansionsParams = "pinned_tweet_id";
const tweetFieldsParams = "attachments,author_id,context_annotations,conversation_id,created_at,edit_controls,entities,geo,id,in_reply_to_user_id,lang,non_public_metrics,public_metrics,organic_metrics,possibly_sensitive,referenced_tweets,reply_settings,source,text,withheld";
const params = `user.fields=${userFieldsParams}&expansions=${expansionsParams}&tweet.fields=${tweetFieldsParams}` // Edit optional query parameters here

const endpointURL = `https://api.twitter.com/2/users/me?${params}`;

(async () => {
    try {
      let oAuthAccessToken = defaultAccessToken;
      if(SETTINGS.useRequestTokenPin) {
        oAuthAccessToken = await getPinBasedOauthAccessToken()
      }
    
      // Make the request
      const response = await getRequest(oAuthAccessToken, endpointURL);
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
  node src/twitter-api-v2/getUsersMe.js
  */