
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: window.innerHeight,//360
    width: window.innerWidth,//640
    videoId: '',
    
    playerVars: { 'autoplay': 1,'controls': 0, 'disablekb': 1,'fs': 0, 'rel': 0,'showinfo': 0, 'modestbranding': 0},
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  
  console.log('done');
  //event.target.playVideo();
  document.getElementById('player').allowFullscreen = false;
  
  
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.


      function onPlayerStateChange(event) {
        
        console.log(event.data);
        
        if (event.data == -1 ) {
          //setTimeout(playVideo, 6000);
        }
      }
      function playVideo() {
        //player.playVideo();
        //console.log('play video function trigger');
      }
