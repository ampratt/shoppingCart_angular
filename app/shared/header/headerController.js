app.controller('HeaderController', 
	['$scope', '$http', '$location', 'ShoppingCartService',
	function($scope, $http, $location, ShoppingCartService) {


	$http.get('app/data.json')
		.then((resp) => {
			$scope.categories = resp.data.map((product) => product.category)
				.filter((value,index,self) => self.indexOf(value) === index);
		}); //get

   	$scope.isActive = function(route) {
        return route === $location.path();
    }


}]); // headerController