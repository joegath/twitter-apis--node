import { oAuthAccessToken } from "./helpers/oauth.js";
import { getRequest } from "./helpers/requests.js";

const SETTINGS = {
  useRequestTokenPin: false
};

const params = `usernames=X`
const endpointURL = `https://api.twitter.com/2/users/by?${params}`;

(async () => {
    try {

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