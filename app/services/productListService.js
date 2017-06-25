app.factory("productControllerInitialData", 
	['$routeParams', '$route','$http', '$q',
	function($routeParams, $route, $http, $q) {

    return function() {
		let deferred = $q.defer();

    	// route category
		let category = '';
		// console.log($route.current.params)

		if (typeof $route.current.params.cName !== "undefined"){
			category = $route.current.params.cName; 
		} 
		// console.log('category: ' + category);


		// product list, filtered by category
    	let products = []
    	$http.get('app/data.json')
			.then((resp) => {
				// console.log('INSIDE GET category: ' + category);
				if(category === ''){
					products = resp.data;
				} else {
					products = resp.data.filter((item) => item.category === category);
				}
				// console.log('...RETURNING INIT DATA...')
				// console.log('category: ' + category);
				// console.log('filtered products: ')
				// console.log(products)

				deferred.resolve({
					products: products,
		            category: category
				})
		}); //get
		
		return deferred.promise;
		 
    } //function
}]);



// app.factory('ProductListService', 
// 	['$http', 
// 	function($http) {

// 	return {	
// 		fetch: function() {
// 			return $http.get('app/data.json')
// 				.then(function(resp){
// 					return resp.data;
// 				}); //get
// 		} // fetch
// 	} //return 
// }]); //ProductListService