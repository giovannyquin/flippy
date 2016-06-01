'use strict';

angular.module('cardFlip', [])
  .directive('cardFlip', function () {
    return {
      restrict: 'EA',
        scope: {
            trigger: '@',
            reverse: '@',
            speed: '@',
            axis: '@'
        },
      link: function (scope, element) {
          var objectFlip = {};
          var fillObject = function(){
              if(scope.trigger){
                  objectFlip.trigger = scope.trigger;
              }
              else{
                  objectFlip.trigger = 'hover';
              }

              if(scope.reverse){
                  objectFlip.reverse = scope.reverse;
              }
              else{
                  objectFlip.reverse = false;
              }

              if(scope.axis){
                  objectFlip.axis = scope.axis;
              }
              else{
                  objectFlip.axis = 'y';
              }

              if(scope.speed){
                  objectFlip.speed = scope.speed;
              }
              else{
                  objectFlip.speed = 500;
              }
              element.flip(objectFlip);
          };

          fillObject();
      }
    };
  });
