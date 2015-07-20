// Code goes here

angular.module('myApp', [])
.controller('MyController', function($scope, $timeout) {
  $scope.age="18years";
  $scope.clock = {};//clock object
  
  var updateClock = function(){
    $scope.clock.now = new Date();//introducing an attribute 'now' for the clock object
    $timeout(function(){
      updateClock();},1000);//end of timeout inbuilt function variable
      
  };//end of declaration for the updateClock function variable
  
  /*other than declaring the updateClock variable the controller function...
  ...also implements the updateClock variable as below*/
  
  updateClock();//when the timer fires it triggers this function variable
  
    });//end of angular.module.controller function declaration