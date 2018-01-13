var app = angular.module("myApp", [])
.constant('VERSION', 1.1)
.controller("myCtrl", function(VERSION, $scope) {
  this.version = VERSION;
  
  $scope.myFunc = function () {

    }
          });
