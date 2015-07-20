var myApp = angular.module("myApp", []);
myApp.controller("myController1", function($scope){
    $scope.projects=[
        {name:"scheduling", project_no: "project 1"},
        {name:"navigation", project_no: "project 2"},
        {name:"setup",  project_no:"project 3"},
        {name:"visits", project_no:"project 4"}
    ];
    
});

myApp.directive("debug", function($compile){
    return {
        terminal:true,
        priority: 100000000,
        link:function(scope, element, attrs){
            var clone = element.clone();
            element.attr("style","color:red");
            clone.removeAttr("debug");
            var clonedElement = $compile(clone)(scope);
            element.after(clonedElement);
        }

    };
});
