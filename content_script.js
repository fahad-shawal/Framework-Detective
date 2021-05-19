
var keyWordsMap = {
    "Shopify": ["var Shopify"],
    'Demandware': ["Product-Variation", "demandware"],
}

function getFrameWorks(){
    var list = [];
    var htmlContent = document.documentElement.innerHTML;

    for (var key of Object.keys(keyWordsMap)){

        for (var i in keyWordsMap[key]){

            if (htmlContent.includes(keyWordsMap[key][i])){

                list.push(key);
            }
        }
    }
    
    if (list.length == 0){

        list = ["None Found!"]
    }
    return list.join("-|-")
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        var list = getFrameWorks();
        sendResponse({ result: list });
});
