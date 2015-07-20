// Code goes here

var myApp = angular.module("myApp", []);
myApp.run(function($rootScope){
  $rootScope.name = "World";
});


myApp.controller("MyController", function($scope){
  $scope.name="Faith Kangai";
  
});