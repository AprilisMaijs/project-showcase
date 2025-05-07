angular.module('projectApp')
.controller('FormCtrl', function($scope, $http) {
  $scope.submitProject = function() {
    if ($scope.projectForm.$valid) {
      $http.post('http://localhost:3000/projects', $scope.project).then(() => {
        alert("Project added!");
      });
    }
  };
});
