var app = angular.module('shoppingCartApp', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);	//'mgcrea.ngStrap'


// check if anything is in the cart at startup
app.run(['$rootScope', function($rootScope) {

	// $rootScope.cart = [];
	// cl

	// $rootScope.$on('someEvent', function(event, next, previous, error) {
	// 	$rootScope.message = 'Sorry, you must log in to acces that page';
	// 	$location.path('/login');
	// }); // routeChangeError
}]); // run


app.config(['$routeProvider', '$locationProvider', 
		function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/products', {
			templateUrl: 'app/components/productList/productListView.html',
			controller: 'ProductListController'	
		})
		.when('/product/:pId', {
			templateUrl: 'app/components/product/productView.html',
			controller: 'ProductController'	
		})
		.when('/category/:cName', {
			templateUrl: 'app/components/category/categoryView.html',
			controller: 'CategoryController'
		})
		.otherwise({
			redirectTo: '/products'
		});


	$locationProvider
	  .html5Mode(false)
	  .hashPrefix('!');
	// $locationProvider.html5Mode(true);
	// $locationProvider.hashPrefix('');
	
}]);