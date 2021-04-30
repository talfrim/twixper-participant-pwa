
function strInsertAtPosition(originalStr, insertedStr, position) {
    return [originalStr.slice(0, position), insertedStr, originalStr.slice(position)].join('')
}


/* 
    Returns the html from a tweet's text.
    For example: highlights hashtags and mentions, and adds hyper-links on them.
*/
function getHtmlTextFromTweet(tweet, isQuotedTweet){
    const tweetText = tweet.full_text || tweet.text;
    let textHtml = tweetText
    const textStartIndex = tweet.display_text_range[0]
    const textEndIndex = tweet.display_text_range[1]
    const entities = tweet.entities
    const hashtags = entities.hashtags
    const mentioned = entities.user_mentions
    const urls = entities.urls
    const media = entities.media
    
    // Trim url media at the end of the text
    if(media != null && media.length > 0){
        media.forEach(obj => {
            const displayUrl = obj.display_url
            if(obj.indices[1] > textEndIndex
                || (obj.indices[1] == textEndIndex && displayUrl.includes("twitter.com")))
            { 
                // Exceeds the text-display indices or this is an non-relevant twitter link
                // Find the url and trim it
                const url = obj.url
                const urlIndex = textHtml.indexOf(url)
                if(urlIndex != -1){
                    textHtml = textHtml.substring(0, urlIndex)
                }
                // const mediaLength = obj.indices[1] - obj.indices[0] + 1
                // textHtml = textHtml.slice(0, -1 * mediaLength);
            }
        });
    }
    
    // Trim text from the start (sometimes contains mentions that are actually not part of the text)
    textHtml = textHtml.substring(textStartIndex)

    if(urls != null){
        urls.forEach(obj => {
            const displayUrl = obj.display_url
            const url = obj.url
            if(obj.indices[1] > textEndIndex
                || (obj.indices[1] == textEndIndex && displayUrl.startsWith("twitter.com")))
            { 
                // Exceeds the text-display indices or this is an non-relevant twitter link
                const urlIndex = textHtml.indexOf(url)
                if(urlIndex != -1){
                    textHtml = textHtml.substring(0, urlIndex)
                }
                // const urlLength = obj.indices[1] - obj.indices[0] + 1
                // textHtml = textHtml.slice(0, -1 * urlLength);
            }
            else{
                // Replace urls with "url.display_url"
                // Edit the url
                let injection = '<a href="' + url + '" target="_blank" class="text-keyword" data-type="url"'
                + 'data-value="' + url + '">' + displayUrl + '</a>'
                if(isQuotedTweet){ // Not rendering links when they are inside quoated tweet.
                    injection = displayUrl
                }
                textHtml = textHtml.replace(url, injection)
            }
        });
    }

    if(!isQuotedTweet){ // Not rendering # and @ inside quoated tweet.
        // Wrap hashtags with blue color
        let wrappedHashtags = []
        if(hashtags){
            hashtags.forEach(obj => {
                const hashtagText = obj.text
                if(!wrappedHashtags.includes(hashtagText)){
                    wrappedHashtags.push(hashtagText)
                    const injection = '<span class="text-keyword" data-type="hashtag"'
                    + 'data-value="#' + hashtagText + '">#' + hashtagText + '</span>'
                    const regEx = new RegExp("#" + hashtagText , "ig");
                    textHtml = textHtml.replace(regEx, injection)
                }
            });
        }
        
        // Wrap mentions with blue color
        let wrappedMentioned = []
        if(mentioned){
            mentioned.forEach(obj => {
                const mentionedText = obj.screen_name
                const mentionedId = obj.id_str
                if(!wrappedMentioned.includes(mentionedText)){
                    wrappedMentioned.push(mentionedText)
                    const injection = '<span class="text-keyword" data-type="userMention"'
                    + 'data-value="' + mentionedText + '" data-valueid="' + mentionedId +'">@' + mentionedText + '</span>'
                    const regEx = new RegExp("@" + mentionedText, "ig");
                    textHtml = textHtml.replace(regEx, injection)
                }
            });
        }
    }
    
    // Convert string to html
    textHtml = textHtml.replace(/(?:\r\n|\r|\n)/g, '<br>');

    return textHtml
}

exports.getHtmlTextFromTweet = getHtmlTextFromTweet