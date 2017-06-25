app.controller('ProductListController', 
	['$rootScope','$scope', '$http', '$routeParams','ShoppingCartService', 'initialData',
	function($rootScope, $scope, $http, $routeParams, ShoppingCartService, initialData) {

		$scope.whichCategory = initialData.category; // route params for category		
		$scope.products = initialData.products;
		
		$scope.priceArray= [];
		angular.forEach($scope.products, function (product, key) {
			product['wholeNumber'] = product.pricePerUnit.split('.')[0];
			product['decimal'] = product.pricePerUnit.split('.')[1];
			
		    $scope.priceArray.push({ 'wholeNumber': product.pricePerUnit.split('.')[0], 
		    					'decimal': product.pricePerUnit.split('.')[1] });
		});


	$scope.lookupItemInCart = function(product) {
		return ShoppingCartService.lookupItemInCart(product);	
	}

	$scope.addToCart = function(item) {
		ShoppingCartService.addToCart(item);
	}

	$scope.removeFromCart = function(item) {
		ShoppingCartService.removeFromCart(item);
	}	

}]); //ProductListController