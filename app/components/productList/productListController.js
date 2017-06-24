app.controller('ProductListController', 
	['$scope', '$http', 
	function($scope, $http){

	$http.get('app/data.json')
		.then(function(resp){
			$scope.products = resp.data;


			$scope.priceArray= [];
			angular.forEach($scope.products, function (product, key) {
				product['wholeNumber'] = product.pricePerUnit.split('.')[0];
				product['decimal'] = product.pricePerUnit.split('.')[1];
				
				product['amountSelected'] = 0;

				// console.log(product.wholeNumber);
			    $scope.priceArray.push({ 'wholeNumber': product.pricePerUnit.split('.')[0], 
			    					'decimal': product.pricePerUnit.split('.')[1] });
			});


			// console.log($scope.priceArray)
		}); //get


}]); //ProductListController