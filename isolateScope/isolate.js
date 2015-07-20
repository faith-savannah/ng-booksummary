angular.module('myApp', [])
    .directive('myDirective', function() {
      return {
        restrict: 'A',
        scope: {
          myProperty: '@'
        },
      };
    })
    .directive('myInheritScopeDirective', function() {
      return {
        restrict: 'A',
        scope: true
      };
    });