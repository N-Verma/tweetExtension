var threshold = 50;//if sync.get fails, we use 50 as a default.

chrome.storage.sync.get({
  threshold: '50'
}, function(items) {
  threshold = items.threshold;
});
function DOMModificationHandler(){
  //console.log("I am here event handler")
  document.getElementById("react-root").removeEventListener('DOMSubtreeModified',DOMModificationHandler);
    setTimeout(function(){
        add();
        document.getElementById("react-root").addEventListener('DOMSubtreeModified',DOMModificationHandler);
    },10);
}
document.getElementById("react-root").addEventListener('DOMSubtreeModified',DOMModificationHandler);

function add(){
  
  var arts
  //setTimeout(()=>{
    arts = document.querySelectorAll("article");
    //console.log(arts);
  arts.forEach(art=>{
     
      var ele = art.children[0].children[0].lastChild
      var butEle = art.children[0].children[0].children[1];
      if(butEle==null){
        var but = document.createElement("button");
        but.innerHTML="Save"
        but.classList.add("saveTweet")
        ele.after(but)
        chrome.runtime.sendMessage({message: "listeners", data:{article:art,button:but}}, function(response) {
          console.log("")
        });
      }
      
  })
  //},5000)
}
// add()

