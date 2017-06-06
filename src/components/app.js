angular.module('video-player', [])
.controller('videoController', function($scope) {
  $scope.videoData = exampleVideoData;
})

.component('app', { 
  templateUrl: 'src/templates/app.html'
});