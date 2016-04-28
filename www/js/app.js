// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('ToDoController', function ($scope) {
  $scope.todos = [];      //todos array
  $scope.todoModel = {};  //empty object to hold entered todo item
  $scope.todoModel.todo = ''; //todos array in object
  
  //adds current value in model to array and set value of model to empty 
  //string for next todo entry
  $scope.addTodo = function () {
    $scope.todos.push($scope.todoModel.todo);
    $scope.todoModel = {
      todo: ''
    };
  };
})
