/* DROPDOWN WINDOW */

app.controller('DropDownController', function ($scope, $log) {

  $scope.status = {
    isopen: false
  };

  $scope.closeDropdown = function() {
    $scope.status.isopen = false;
  };

  $scope.toggled = function(open) {
    // $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

  $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
});