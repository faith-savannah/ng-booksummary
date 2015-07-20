var myApp = angular.module("myApp",[]);

myApp.controller("myController", function($scope, game, game2){
    $scope.greetings = game.title;

    $scope.stuff = {
        name: game2.title,
        message:game2.message
    };

});
myApp.factory("game", function(){
    return{
        title:"hello people. This is the shorthand of instantiating a factory"
    }
});

myApp.config(function($provide){
    $provide.factory("game2", function(){
        return{
            title:"I got this!",
            message: "difference between me and a provider is that i already have the $get of a provider worked out!"
        };

    });
})