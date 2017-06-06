angular.module('video-player')

.controller('videoController', function() {
  this.videoData = window.exampleVideoData;
  // this.videoData = window.exampleVideoData;
})

.component('app', { 
  controller: 'videoController', 
  templateUrl: 'src/templates/app.html'
});