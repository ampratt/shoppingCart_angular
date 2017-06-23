var app = angular.module('shoppingCart', []);	//'mgcrea.ngStrap'

app.controller('mainController', 
	['$scope', '$http', 
	function($scope, $http){

	$scope.message = 'welcome to the other side';

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


			console.log($scope.priceArray)
		}); //get


}]);