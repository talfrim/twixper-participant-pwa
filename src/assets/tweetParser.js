
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
                || (obj.indices[1] == textEndIndex && displayUrl.startsWith("twitter.com")))
            { 
                // Exceeds the text-display indices or this is an non-relevant twitter link
                const mediaLength = obj.indices[1] - obj.indices[0] + 1
                textHtml = textHtml.slice(0, -1 * mediaLength);
            }
        });
    }

    // Trim text from the start (sometimes contains mentions that are actually not part of the text)
    textHtml = textHtml.substring(textStartIndex)

    if(urls != null){
        urls.forEach(obj => {
            const displayUrl = obj.display_url
            if(obj.indices[1] > textEndIndex
                || (obj.indices[1] == textEndIndex && displayUrl.startsWith("twitter.com")))
            { 
                // Exceeds the text-display indices or this is an non-relevant twitter link
                const urlLength = obj.indices[1] - obj.indices[0] + 1
                textHtml = textHtml.slice(0, -1 * urlLength);
            }
            else{
                // Replace urls with "url.display_url"
                const url = obj.url
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

    // // Wrap hashtags with blue color
    // textHtml = textHtml.replace(/(^|\W)(#[\p{L}\d_]+)/iug, 
    // '$1<span style="color:rgb(27, 149, 224)">$2</span>');

    // // Wrap mentions with blue color
    // textHtml = textHtml.replace(/(^|\W)(@[\p{L}\d_]+)/iug,
    // '$1<span style="color:rgb(27, 149, 224)">$2</span>');

    /*
        (1) The problem with the seperation is that the order of the appearance
        of # and @ can be mixed. We need to find a way to *combine* # and @ objects (and urls)
        and then sorting by the indices, and deal with each one seperatly while
        identifing its type (# or @ or url) by adding a custom field.

        (2) Also the indices are sometimes incorrect. Probably because of the emojis and \n.
        Every \n counts as 1, so does each emoji. 

        (*) Proposed method: First run through the chars. For each one, if it is an emoji,
        increment the "indexIndentation" by one. Then cut the text using "display_text_range"
        field (removes the last url). Then do what was described in (1). Keep in
        mind that there are also urls that should be replaced with urlObj.display_url .Finally
        replace \n with <br>
    */

    // Finding hashtags indexes
    /*const hashtagsIndices = []
    hashtags.forEach(obj => {
        hashtagsIndices.push(obj.indices[0])
        hashtagsIndices.push(obj.indices[1])
    });

    // Finding mentioned indexes
    const mentionedIndices = []
    mentioned.forEach(obj => {
        mentionedIndices.push(obj.indices[0])
        mentionedIndices.push(obj.indices[1])
    });

    // Wrap hashtags with blue color (rgb(27, 149, 224))
    // TODO: later, instead of wrapping with span, wrap it with "a" tag with a relevant link.
    let indexIndentation = 0
    for (let i = 0; i < hashtagsIndices.length - 1; i += 2) {
        const firstIndex = hashtagsIndices[i] + indexIndentation ;
        // console.log("first: " + firstIndex)
        let strToInject = '<span style="color:rgb(27, 149, 224)">'
        textHtml = strInsertAtPosition(textHtml, strToInject, firstIndex)
        // console.log(textHtml)

        indexIndentation += strToInject.length
        const secondIndex = hashtagsIndices[i+1] + indexIndentation;
        // console.log("sec: " + secondIndex)
        strToInject = '</span>'
        textHtml = strInsertAtPosition(textHtml, strToInject, secondIndex)
        // console.log(textHtml)

        indexIndentation += strToInject.length
    }

    // Wrap mentioned with blue color (rgb(27, 149, 224))
    // TODO: later, instead of wrapping with span, wrap it with "a" tag with a relevant link.
    for (let i = 0; i < mentionedIndices.length - 1; i += 2) {
        const firstIndex = mentionedIndices[i] + indexIndentation ;
        // console.log("first: " + firstIndex)
        let strToInject = '<span style="color:rgb(27, 149, 224)">'
        textHtml = strInsertAtPosition(textHtml, strToInject, firstIndex)
        // console.log(textHtml)

        indexIndentation += strToInject.length
        const secondIndex = mentionedIndices[i+1] + indexIndentation;
        // console.log("sec: " + secondIndex)
        strToInject = '</span>'
        textHtml = strInsertAtPosition(textHtml, strToInject, secondIndex)
        // console.log(textHtml)

        indexIndentation += strToInject.length
    }
    
*/
    textHtml = textHtml.replace(/(?:\r\n|\r|\n)/g, '<br>');//Convert string to html

    return textHtml
}

exports.getHtmlTextFromTweet = getHtmlTextFromTweet