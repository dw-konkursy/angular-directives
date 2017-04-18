(function () {
  'use strict';
  angular.module('commentBox')
    .directive('addComment', AddCommentDirective);

  function AddCommentDirective() {
    return {
      restrict: 'E',
      templateUrl: 'commentBox/addComment/addComment.html'
    };
  }
})();