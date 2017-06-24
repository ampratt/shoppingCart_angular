app.controller('ProductListController', 
	['$rootScope','$scope', '$http', 'ShoppingCartService',
	function($rootScope, $scope, $http, ShoppingCartService){

	$http.get('app/data.json')
		.then(function(resp){
			$scope.products = resp.data;

			$scope.priceArray= [];
			angular.forEach($scope.products, function (product, key) {
				product['wholeNumber'] = product.pricePerUnit.split('.')[0];
				product['decimal'] = product.pricePerUnit.split('.')[1];
				
				// =0
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
		//Find index of specific object using findIndex methode.    
let objIndex = $scope.products.findIndex((obj => obj.id == item.id));

//Console object.
console.log("Before update: ", $scope.products[objIndex])

//Update object's name property.
$scope.products[objIndex].amountSelected += 1;

//Console object again.
console.log("After update: ", $scope.products[objIndex])


		// $scope.product.find(x => x.id === '45')
		// $scope.product
	}


}]); //ProductListController