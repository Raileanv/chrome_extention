window.onload = function() {
  var element = document.getElementById('bbb')
  element.onclick = function(){
    var activeTabUrl
    chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {
       var activeTab = arrayOfTabs[0];
       activeTabUrl = activeTab.url;
    xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://46.101.104.107/?url='+activeTabUrl);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(encodeURI('name=' + activeTabUrl));
    });
  };
};
