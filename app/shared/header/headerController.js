app.controller('HeaderController', 
	['$scope', '$http', '$location', 'ShoppingCartService', '$window',
	function($scope, $http, $location, ShoppingCartService, $window) {


	$http.get('app/data.json')
		.then((resp) => {
			$scope.categories = resp.data.map((product) => product.category)
				.filter((value,index,self) => self.indexOf(value) === index);
		}); //get

   	$scope.isActive = function(route) {
        return route === $location.path();
    } // isActive

	$scope.removeFromCart = function(item) {	
		ShoppingCartService.removeFromCart(item);
	} // removeFromCart

	$scope.removeAllByItemType = function(item) {
		ShoppingCartService.removeAllByItemType(item);
	} // removeAllByItemType

	// $scope.getItem = function() {

	// }

	$scope.lookupCartItemsCount = function() {
		return ShoppingCartService.lookupCartItemsCount();
	} // lookupCartItemsCount

	$scope.lookupCartTotalSum = function() {
		return ShoppingCartService.lookupCartTotalSum();
	} // lookupCartTotalSum

	$scope.showNotImplemented = function() {
		$window.alert('This functionality has not been implemented in this demo');
	}

}]); // headerController