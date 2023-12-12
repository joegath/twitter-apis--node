
import { oauth } from "./oauth.js";
import qs from 'querystring';

const authorizeURL = new URL('https://api.twitter.com/oauth/authorize');
const accessTokenURL = 'https://api.twitter.com/oauth/access_token';

async function requestToken(requestTokenURL) {
    const authHeader = oauth.toHeader(oauth.authorize({
      url: requestTokenURL,
      method: 'POST'
    }));
  
    const req = await got.post(requestTokenURL, {
      headers: {
        Authorization: authHeader["Authorization"]
      }
    });
  
    if (req.body) {
      return qs.parse(req.body);
    } else {
      throw new Error('Cannot get an OAuth request token');
    }
}

async function accessToken({
    oauth_token,
    oauth_token_secret
    }, verifier) {
    const authHeader = oauth.toHeader(oauth.authorize({
      url: accessTokenURL,
      method: 'POST'
    }));
    const path = `https://api.twitter.com/oauth/access_token?oauth_verifier=${verifier}&oauth_token=${oauth_token}`
    const req = await got.post(path, {
      headers: {
        Authorization: authHeader["Authorization"]
      }
    });
    if (req.body) {
      return qs.parse(req.body);
    } else {
      throw new Error('Cannot get an OAuth request token');
    }
}

export async function getPinBasedOauthAccessToken(requestTokenURL) {
    // Get request token
    const oAuthRequestToken = await requestToken(requestTokenURL);
    // Get authorization
    authorizeURL.searchParams.append('oauth_token', oAuthRequestToken.oauth_token);
    console.log('Please go here and authorize:', authorizeURL.href);
    const pin = await input('Paste the PIN here: ');
    // Get the access token
    const oAuthAccessToken = await accessToken(oAuthRequestToken, pin.trim());
    return oAuthAccessToken;
}