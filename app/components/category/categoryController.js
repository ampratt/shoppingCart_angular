app.controller('CategoryController', 
	['$scope', '$rootScope', '$http', '$routeParams', 'ShoppingCartService', 
	function($scope, $rootScope, $http, $routeParams, ShoppingCartService){

	$scope.whichCategory = $routeParams.cName;

	$http.get('app/data.json')
		.then(function(resp){
			$scope.products = resp.data.filter((product) => 
				product.category === $routeParams.cName)

			$scope.priceArray= [];
			angular.forEach($scope.products, function (product, key) {
				product['wholeNumber'] = product.pricePerUnit.split('.')[0];
				product['decimal'] = product.pricePerUnit.split('.')[1];
				
				angular.forEach($rootScope.cart, (item,key) => {
					if(item.item.id === product.id) {
						// console.log(product.name + ' - #######' + item.quantity)
						product['amountSelected'] = item.quantity;
					} else {
						// console.log(product.name + ' - #' + 0)
						product['amountSelected'] = 0;
					}
				}) // inner loop

				// console.log(product.wholeNumber);
			    $scope.priceArray.push({ 'wholeNumber': product.pricePerUnit.split('.')[0], 
			    					'decimal': product.pricePerUnit.split('.')[1] });
			});
		}); //get

	$scope.addToCart = function(item) {
		ShoppingCartService.addToCart(item);

		//update amount selector
		let objIndex = $scope.products.findIndex(obj => obj.id == item.id);
		//Update object's name property.
		$scope.products[objIndex].amountSelected += 1;
	}

	$scope.removeFromCart = function(item) {
		ShoppingCartService.removeFromCart(item);

		//update amount selector
		let objIndex = $scope.products.findIndex(obj => obj.id == item.id);
		//Update object's name property.
		if($scope.products[objIndex].amountSelected > 0) {
			$scope.products[objIndex].amountSelected -= 1;
		} 
	}


}]); //CategoryController