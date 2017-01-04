
var app = angular.module("app",[]);

app.directive("simple", function(){
  return function (scope, element){
    element.addclass("plain")
  }
})