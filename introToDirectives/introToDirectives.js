angular.module('myApp', [])
.directive('myDirective', function() {
return {
restrict: 'A',
replace: true,
scope: {
    urlSecond: '=someAttr', // binding strategy
    myLinkText: '@' // binding strategy
    },
template: '<div> \
                <input type="text" ng-model="urlSecond"/>\
                <a href="{{urlSecond}}">{{myLinkText}}</a>\
            </div>'
};
});