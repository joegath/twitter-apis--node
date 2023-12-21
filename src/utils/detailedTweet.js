import { getRandomText } from "./functions";

const defaultText = `Sample random Tweet ${getRandomText()} 🌟\n detail 1: ${getRandomText()} \n detail 2: ${getRandomText()} \n sample link: https://twitter.com`;
const defaultHashtags = `#hashtag${getRandomText()}`;
const defaultTweetArgs = {
    text: defaultText,
    hashtags: defaultHashtags
};


export const getDetailedTweet = (args=defaultTweetArgs) => {
    const { text, hashtags} = args;
    return `${text} \n\n ${hashtags}`;
};