angular.module('video-player')
.component('videoList', {
  templateUrl: 'src/templates/videoList.html',

  bindings: {
    videos: '<'
  },
});

//problem: this returns undefined, not the data
//Data is not being passed in through bindings


//From App passed down to videoList
// then VideoList name into VideoList.js
// then go into VideoList Entry.html & then pass down to VideoList.js