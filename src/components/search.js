angular.module('video-player')

.controller('searchController', function(youTubeVideos) {
  this.searchInput = '';
})

.component('search', {
  bindings: {
    searchResults: '<'
  },

  templateUrl: 'src/templates/search.html'
});
