
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.message == "listeners"){
        //add event handler for button click
        // chrome.tabs.executeScript(null,{
        //   data:request.data
        // },function() {
        //   chrome.tabs.executeScript(null,{file: "injectedScript.js"})
        // });
        console.log(typeof request.data)
        chrome.tabs.executeScript(null,{file: "injectedScript.js"},function(){
          chrome.tabs.executeScript(null,{data:'request.data'})
        })
        sendResponse({message: "OK"});

      }
});