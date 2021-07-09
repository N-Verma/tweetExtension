// var buts = document.getElementsByClassName("saveTweet")
var fdata;
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    //fdata = request.data
    console.log(request)
  })
// fdata.button.addEventListener('click',function(){
//   var link = fdata.article.querySelectorAll("a")[3]
//   console.log("clicked")
//   console.log(link.href)
// })




// old method
// for(var z = 0; z < buts.length; z++) {
//     var parent = buts[z].parentElement
//     //console.log(parent)
//     buts[z].addEventListener('click', function(){
//       console.log("clicked")
      
//       try {
//         //console.log(parent)
//         // var link = parent.children[0].children[1].children[1].children[0].children[0]
//         // .children[0].children[0].children[2]
//         var link = parent.querySelectorAll("a")[3]
//         console.log(link.href)
//       } catch (error) {
//         console.log(error)
//       }
//     });
// }