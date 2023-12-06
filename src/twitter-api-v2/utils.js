
/**
 * GET/2/users/me user.fields params
 * including promoted_metrics param in non-promoted tweets will make the call to throw errors
 */
export const allUsersFieldsParams = "created_at,description,entities,id,location,most_recent_tweet_id,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,verified_type,withheld";

/**
 * GET/2/users/me tweet.fields params
 * including promoted_metrics param in non-promoted tweets will make the call to throw errors
 */
export const allTweetFieldsParams = "attachments,author_id,context_annotations,conversation_id,created_at,edit_controls,entities,geo,id,in_reply_to_user_id,lang,non_public_metrics,public_metrics,organic_metrics,promoted_metrics,possibly_sensitive,referenced_tweets,reply_settings,source,text,withheld";
