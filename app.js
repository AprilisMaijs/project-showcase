angular.module('projectApp', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
    .when('/project/:id', {
      templateUrl: 'views/detail.html',
      controller: 'DetailCtrl'
    })
    .when('/add', {
      templateUrl: 'views/form.html',
      controller: 'FormCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html'
    })
    .otherwise({ redirectTo: '/home' });
});
