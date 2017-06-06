angular.module('video-player')
.component('videoPlayer', {
  bindings: {
    videoData: '<'
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
