// Code goes here

var myApp = angular.module("myApp", []);

myApp.controller("ArithmeticController", function($scope){
  $scope.counter = 0;
  $scope.add = function(increment){ $scope.counter += increment; };
  $scope.subtract = function(decrement){ $scope.counter -= decrement; };
    
});