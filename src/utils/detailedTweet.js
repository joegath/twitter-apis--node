
export const getDetailedTweet = (args={}) => {
    const defaultText = "Sample Tweet 🌟\n detail 1. \n detail 2. \n sample link: https://twitter.com";
    const defaultHashtags = "#hashtag";
    const { text, hashtags} = args;
    return `${text || defaultText} \n\n ${hashtags || defaultHashtags}`;
};