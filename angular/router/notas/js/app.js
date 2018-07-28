var app = angular.module('notas', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home',
      controller: 'homeController'
    })
    .when('/nota', {
      templateUrl: 'nota',
      controller: 'notaController'
    })
    .when('/nota/:id', {
      templateUrl: 'nota',
      controller: 'notaController'
    })
    .otherwise('/')
})
