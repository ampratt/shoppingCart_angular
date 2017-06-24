app.controller('CategoryController', 
	['$scope', '$rootScope', '$http', '$routeParams', 
	function($scope, $rootScope, $http, $routeParams){

	$scope.whichCategory = $routeParams.cName;

	$http.get('app/data.json')
		.then(function(resp){
			$scope.products = resp.data.filter((product) => 
				product.category === $routeParams.cName)
		}); //get

}]); //CategoryController