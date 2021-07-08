var buts = document.getElementsByClassName("saveTweet")
for(var z = 0; z < buts.length; z++) {
    buts[z].addEventListener('click', function(){
      alert("Saved")
    });
}