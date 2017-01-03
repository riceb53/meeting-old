(function() {
  "use strict";

  angular.module("app").controller("meetingsCtrl",function($scope, $http){

    $http.get('/api/v1/meetings').then(function(response){
      $scope.meetings = response.data;
    })
    $scope.message = 'hello';
  });

}());
