var APP_NAME = "Framework Detective"
var APP_VERSION = "1.0.0"

function setAppName() {
    document.getElementsByTagName("title").textContent = APP_NAME;
    document.getElementById("app-name").textContent = APP_NAME;
}

function setAppVersion() {
    document.getElementById("app-version").textContent = APP_VERSION;
}

function setFramework(list) {
    document.getElementById("framework").appendChild(list);
}

function makeList(response){
    var ul = document.createElement("ul");
    var frameWorks = response.result.split('-|-');
    
    for (i in frameWorks){
        var li = document.createElement("li");  
        var textNode = document.createTextNode(frameWorks[i])
        li.appendChild(textNode);
        ul.appendChild(li);
    }
    return ul
}

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {}, function handler(response) {
        if(response){
            setFramework(makeList(response));
        }
    });
});

function main(){
    setAppName();
    setAppVersion();
}

main();
