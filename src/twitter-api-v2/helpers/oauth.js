import crypto from 'crypto';
import OAuth from 'oauth-1.0a';
import {} from 'dotenv/config';


// The code below sets the consumer key and consumer secret from your environment variables
// To set environment variables on macOS or Linux, run the export commands below from the terminal:
// export CONSUMER_KEY='YOUR-KEY'
// export CONSUMER_SECRET='YOUR-SECRET'
const consumer_key = process.env.TWITTER_API_KEY;
const consumer_secret = process.env.TWITTER_API_KEY_SECRET;

const oauth_token = process.env.TWITTER_ACCESS_TOKEN;
const oauth_token_secret = process.env.TWITTER_ACCESS_TOKEN_SECRET;

export const oAuthAccessToken = {
  oauth_token,
  oauth_token_secret
};

export const oauth = OAuth({
    consumer: {
      key: consumer_key,
      secret: consumer_secret
    },
    signature_method: 'HMAC-SHA1',
    hash_function: (baseString, key) => crypto.createHmac('sha1', key).update(baseString).digest('base64')
});



