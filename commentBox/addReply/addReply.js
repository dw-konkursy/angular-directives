(function () {
  'use strict';
  angular.module('commentBox')
    .directive('addReply', AddReplyDirective);

  function AddReplyDirective() {
    return {
      restrict: 'E',
      templateUrl: 'commentBox/addReply/addReply.html'
    };
  }
})();