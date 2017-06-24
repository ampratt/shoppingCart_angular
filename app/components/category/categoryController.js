app.controller('CategoryController', 
	['$scope', '$rootScope', '$http', '$routeParams', 
	function($scope, $rootScope, $http, $routeParams){

	$scope.whichCategory = $routeParams.cName;

	$http.get('app/data.json')
		.then(function(resp){
			$scope.products = resp.data.filter((product) => 
			product.category === $routeParams.cName)

			$scope.priceArray= [];
			angular.forEach($scope.products, function (product, key) {
				product['wholeNumber'] = product.pricePerUnit.split('.')[0];
				product['decimal'] = product.pricePerUnit.split('.')[1];
				
				product['amountSelected'] = 0;

				// console.log(product.wholeNumber);
			    $scope.priceArray.push({ 'wholeNumber': product.pricePerUnit.split('.')[0], 
			    					'decimal': product.pricePerUnit.split('.')[1] });
			});
		}); //get

}]); //CategoryController