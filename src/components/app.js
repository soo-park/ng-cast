angular.module('video-player')

.controller('videoController', function($scope, youTubeVideos) {
  this.videos = window.exampleVideoData;
  this.currentVideo = this.videos[0];

  // click function
  this.selectVideo = video => {
    this.currentVideo = video;
  };

  // Youtube video received
  this.receiveYoutube = data => {
    this.videos = data.data.items;
    this.currentVideo = this.videos[0];
  };
  
  // use query to receive Youtube data
  this.searchResults = searchInput => {
    youTubeVideos.getYoutubeVideos(searchInput, this.receiveYoutube.bind(this));
  };
  
})

.component('app', {
  controller: 'videoController', 
  templateUrl: 'src/templates/app.html',
});