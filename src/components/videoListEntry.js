angular.module('video-player')
.component('videoListEntry', {
  templateUrl: 'src/templates/videoListEntry.html',

  bindings: {
    // the name matches the iterated item
    video: '<'
  }
});