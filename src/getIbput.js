// Listener for shutdown button and volume
(function () {
      
    const remote = require('electron').remote; 
    
    function init() { 
      document.getElementById("close-btn").addEventListener("click", function (e) {
        const window = remote.getCurrentWindow();
        window.close();
        window.quit();
      }); 
      document.getElementById("volume-bar").addEventListener("input", function (e) {
        player.setVolume(document.getElementById("volume-bar").value);
      }); 
      
    }; 
    
    document.onreadystatechange = function () {
      if (document.readyState == "complete") {
        init(); 
      }
    };
})();






//listener for url input

document.getElementById("urlInput").addEventListener("keydown", function(keydown) {
    console.log('listener');
    
    if(keydown.keyCode == 13){
        
        idfunction();
    }
});

// function for extract id from youtube url
function idfunction(){
    var idefautUrl = document.getElementById('urlInput').value;
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var videoid = idefautUrl.match(regExp)

    //document.getElementById('player').src =  'https://www.youtube.com/embed/'+videoid[7]+'?autoplay=1&controls=0&disablekb=1&fs=0&rel=0&showinfo=0&modestbranding=0&enablejsapi=1&widgetid=1';
    player.loadVideoById(videoid[7]);
    document.getElementById('urlInput').value = '';
    console.log(videoid);
    removeCover();
}
// Remove black cover when video url is entered
function removeCover(){
    
    setTimeout(function(){document.getElementById("cover").style.backgroundColor = "transparent";}, 1000);
    //div.parentNode.removeChild(div);
}



