var myApp = angular.module("myApp", ['ngRoute']);
myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when('/', {
            controller:"routingController",
            templateUrl: "tpls/main.html",
            //ask before uncommenting below
            /*
            resolve:{
                    'data': ['$http', function($http) {
                        return $http.get('data.json').then(
                            function success(resp) { return response.data; }
                            function error(reason) { return false; }
                        );
                    }]
            }*/
            

        });
        
}]);

myApp.controller("routingController", ["$scope", "_data_", function($scope, _data_){
    $scope.data = _data_.database;
}]);