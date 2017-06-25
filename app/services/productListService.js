app.factory("productControllerInitialData", 
	['$routeParams', '$route','$http', '$q',
	function($routeParams, $route, $http, $q) {

    return function() {
		let deferred = $q.defer();
		let category = '';

		if (typeof $route.current.params.cName !== "undefined"){
			category = $route.current.params.cName; 
		} 

		// product list, filtered by category
    	let products = []
    	$http.get('app/data.json')
			.then((resp) => {
				if(category === ''){
					products = resp.data;
				} else {
					products = resp.data.filter((item) => item.category === category);
				}

				deferred.resolve({
					products: products,
		            category: category
				})
		}); //get
		
		return deferred.promise;
		 
    } //function
}]);