angular.module('projectApp')
.controller('HomeCtrl', function($scope, $http) {
  $http.get('http://localhost:3000/projects').then(res => {
    $scope.projects = res.data;
  });
});
