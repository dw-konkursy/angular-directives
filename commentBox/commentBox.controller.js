(function () {
  'use strict';
  angular.module('commentBox')
    .controller('CommentBoxController', CommentBoxController);

  function CommentBoxController() {
    var ctrl = this;

    //static comment data
    ctrl.comments = [
      {
        author: 'Jack Sparrow',
        text: 'Damn M8, this is great!',
        replies: [
          {
            author: 'John Doe',
            text: 'Thx, dooing my best ;)'
          },
          {
            author: 'Trinity',
            text: 'I like trains 🚆'
          }
        ]
      },
      {
        author: 'William DeThoe',
        text: 'Before 301!',
        replies: [
          {
            author: 'Trinity',
            text: 'I like trains'
          }
        ]
      },
      {
        author: 'Jack Sparrow',
        text: 'Damn M8, this is great!'
      }
    ];
  }
})();