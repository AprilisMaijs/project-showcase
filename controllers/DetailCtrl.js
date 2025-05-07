angular.module('projectApp')
.controller('DetailCtrl', function($scope, $routeParams, $http) {
  $http.get('http://localhost:3000/projects/' + $routeParams.id).then(res => {
    $scope.project = res.data;
  });
});
