var app = angular.module('shoppingCartApp', 
	['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);	//'filter' 'mgcrea.ngStrap'


app.config(['$routeProvider', '$locationProvider', 
		function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/products', {
			templateUrl: 'app/components/productList/productListView.html',
			controller: 'ProductListController',
			resolve: {
				initialData: function(productControllerInitialData){
					return productControllerInitialData();
				}
			},
		})
		.when('/category/:cName', {
			templateUrl: 'app/components/category/categoryView.html',
			controller: 'ProductListController',
			resolve: {
				initialData: function(productControllerInitialData){
					return productControllerInitialData();
				}
				// category: function(RouteParamService){
				// 	return RouteParamService.getRouteCategory();
				// },
				// products: function(ProductListService) {
				// 	return ProductListService.fetch();
				// }
			},
		})
		// .when('/product/:pId', {
		// 	templateUrl: 'app/components/product/productView.html',
		// 	controller: 'ProductController'	
		// })
		.otherwise({
			redirectTo: '/products'
		});

	$locationProvider
	  .html5Mode(false)
	  .hashPrefix('!');
}]);