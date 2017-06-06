angular.module('video-player')

.controller('videoController', function() {
  this.videos = window.exampleVideoData;
  this.selectVideo = video => {
    this.currentVideo = video;
  };
  this.searchResults = function() {};
  this.currentVideo = this.videos[0];
})

.component('app', { 
  controller: 'videoController', 
  templateUrl: 'src/templates/app.html',

});