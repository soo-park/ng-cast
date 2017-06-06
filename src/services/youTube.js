angular.module('video-player')

.controller('youtubeController', function($scope, youTubeVideos) {
  $scope.youTubeVideos = youTubeVideos;
})

.service('youTubeVideos', ['$http', function($http) {
  this.getYoutubeVideos = function(query, callback) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      }
    })
    .then(function(data) {
      callback(data);
    })
    .catch(function(error) {
      console.log(error);
    });
  };
}]);
