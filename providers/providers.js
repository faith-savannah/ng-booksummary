var myApp = angular.module("myApp", []);
myApp.controller("myController", function($scope, my_game){
    $scope.greetings = "lesson:providers";
    $scope.message = my_game.title;

}); 



myApp.provider("my_game", function(){
    var type;
    return{

        setType:function(value){
            type = value

        },
        $get:function(){
            return{
                title: type + "craft"
            }
        }
        
    }

})

myApp.config(function(my_gameProvider){
    my_gameProvider.setType("puzzle")
});

