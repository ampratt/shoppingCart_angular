app.controller('ProductListController', 
	['$rootScope','$scope', '$http', '$routeParams','ShoppingCartService', 'initialData',
	function($rootScope, $scope, $http, $routeParams, ShoppingCartService, initialData) {

		// console.log('initialData: ' + initialData)
		//route params for category
		$scope.whichCategory = initialData.category; //'';
		// if ($routeParams.cName){
		// 	$scope.whichCategory = $routeParams.cName 
		// } 
		console.log('whichCategory route: ' + $scope.whichCategory);
		
		$scope.products = initialData.products;
		console.log('# products/this.category: ' + $scope.products.length);

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


	// $http.get('app/data.json')
	// 	.then(function(resp){
	// 		//route params for category
	// 		$scope.whichCategory = '';
	// 		if ($routeParams.cName){
	// 			$scope.whichCategory = $routeParams.cName 
	// 		} 
	// 		console.log('whichCategory')
	// 		console.log($scope.whichCategory)

	// 		// product list
	// 		$scope.products = resp.data;

	// 		$scope.priceArray= [];
	// 		angular.forEach($scope.products, function (product, key) {
	// 			product['wholeNumber'] = product.pricePerUnit.split('.')[0];
	// 			product['decimal'] = product.pricePerUnit.split('.')[1];
				
	// 			angular.forEach($rootScope.cart, (item,key) => {
	// 				if(item.item.id === product.id) {
	// 					// console.log(product.name + ' - #######' + item.quantity)
	// 					product['amountSelected'] = item.quantity;
	// 				} else {
	// 					// console.log(product.name + ' - #' + 0)
	// 					product['amountSelected'] = 0;
	// 				}
	// 			}) // inner loop

	// 			// console.log(product.wholeNumber);
	// 		    $scope.priceArray.push({ 'wholeNumber': product.pricePerUnit.split('.')[0], 
	// 		    					'decimal': product.pricePerUnit.split('.')[1] });
	// 		});
	// 	}); //get



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


}]); //ProductListController