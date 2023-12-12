import { oauth } from "./oauth.js";
import got from "got";

function getAuthHeader (method, oAuthAccessToken, endpointURL) {
  const token = {
    key: oAuthAccessToken.oauth_token,
    secret: oAuthAccessToken.oauth_token_secret
  };

  return oauth.toHeader(oauth.authorize({
    url: endpointURL,
    method
  }, token));
}

export async function getRequest(oAuthAccessToken, endpointURL) {
  const authHeader = getAuthHeader("GET", oAuthAccessToken, endpointURL);

  const req = await got(endpointURL, {
    headers: {
      Authorization: authHeader["Authorization"],
      "user-agent": "v2UserLookupJS"
    }
  });

  if (req.body) {
    return JSON.parse(req.body);
  } else {
    throw new Error("Unsuccessful request");
  }
}

export async function postRequest(oAuthAccessToken, endpointURL, data) {
  const authHeader = getAuthHeader("POST", oAuthAccessToken, endpointURL);

  const req = await got.post(endpointURL, {
    json: data,
    responseType: "json",
    headers: {
      Authorization: authHeader["Authorization"],
      "user-agent": "v2CreateTweetJS",
      "content-type": "application/json",
      "accept": "application/json"
    }
  });

  if (req.body) {
    return req.body;
  } else {
    throw new Error("Unsuccessful request");
  }
}