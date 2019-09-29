var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



var playerConfig = {},                 // Define the player config here
    queue = {                          // To queue a function and invoke when player is ready
      content: null,
      push: function(fn) {
        this.content = fn;
      },
      pop: function() {
        this.content.call();
        this.content = null;
      }
    },
    player;
    
window.onYouTubeIframeAPIReady = function() {
  player = new YT.Player('player', {
    videoId: 'play68MDl02vrWU',
    playerVars: playerConfig,
    events: {
      'onReady': onPlayerReady
    }
  });
};

// API event: when the player is ready, call the function in the queue
function onPlayerReady() {
  if (queue.content) queue.pop();
}

// Helper function to check if the player is ready
function isPlayerReady(player) {
  return player && typeof player.playVideo === 'function';
}

// Instead of calling player.playVideo() directly, 
// using this function to play the video. 
// If the player is not ready, queue player.playVideo() and invoke it when the player is ready
function playVideo(player) {
  isPlayerReady(player) ? player.playVideo() : queue.push(function() {
                                               player.playVideo();
                                             });
}