angular.module('video-player')
.controller('youtubeController', function() {
  console.log('yaya');
})

.component('youtube', {
  controller: 'youtubeController'
})

.service('youTube', function($http) {
  this.getYoutubeVideo = function(name) {
    return $http({
      method: 'GET',
      url: ''
    });
  };
});
