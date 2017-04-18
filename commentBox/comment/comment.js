(function () {
  'use strict';
  angular.module('commentBox')
    .directive('comment', CommentDirective);

  function CommentDirective() {
    return {
      restrict: 'E',
      templateUrl: 'commentBox/comment/comment.html'
    };
  }
})();