(function () {
  'use strict';
  angular
    .module('commentBox')
    .directive('reply', ReplyDirective);

  function ReplyDirective() {
    return {
      restrict: 'E',
      templateUrl: 'commentBox/reply/reply.html'
    };
  }
})();