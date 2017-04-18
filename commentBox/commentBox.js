(function () {
  'use strict';
  angular.module('commentBox')
    .directive('commentBox', CommentBoxDirective);

  function CommentBoxDirective() {
    return {
      restrict: 'E',
      templateUrl: 'commentBox/commentBox.html'
    };
  }
})();