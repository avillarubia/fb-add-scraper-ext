//
var group = document.querySelectorAll("div[class='_4ikz']>div>div>div");
for (var i = 0; i < group.length; i++) {
    var feed = group[i].querySelectorAll("div[data-fte='1']");

    var adds = [];
    for (var j = 0; j < feed.length; j++) {
        var food = feed[j];
        var sponsored = getElemAndExtractInnerText(food, "a.y_t0ank-gkz.j_t0ank__k0");

        if (!sponsored) continue;

        var name = getElemAndExtractInnerText(food, "span.fwn.fcg>span.fwb.fcg");
        var addText = getElemAndExtractInnerText(food, "div[data-testid='post_message']");
        var likesCount = getElemAndExtractInnerText(food, "span._81hb");
        var commentsCount = getElemAndExtractInnerText(food, "a._3hg-._42ft");
        var shareCount = getElemAndExtractInnerText(food, "a._3rwx._42ft");
        var videoViewsCount = getElemAndExtractInnerText(food, "div._567v._3bw._4ubd._28dy._3htz>div>div>div._1vx9>span");
        var videoBlobUrl = getElemAndExtractInnerText(food, "#u_fetchstream_2_3i");

        var add = { name, addText, likesCount, commentsCount, shareCount, videoViewsCount, videoBlobUrl };
        console.log(add);
        adds.push(Object.values(add.Array.prototype.join()));
    }
}

function getElemAndExtractInnerText(food, selector) {
    try {
        var elem = getElement(food, selector);
        return extractInnerText(elem);
    }
    catch{
        return "";
    }
}

function extractInnerText(elem) {
    return elem ? elem.innerText : "";
}

function getElement(food, selector) {
    return food.querySelector(selector);
}
