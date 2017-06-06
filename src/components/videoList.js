angular.module('video-player')
.component('videoList', {
  bindings: {
    videoData: '<'
  },

  controller: 'entry',

  templateUrl: 'src/templates/videoList.html',
})

.controller('entry', function() {
  console.log(this);  
});
