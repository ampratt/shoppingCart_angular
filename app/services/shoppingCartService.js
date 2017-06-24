app.factory('ShoppingCartService', 
	['$rootScope', '$location', '$http' ,
	function($rootScope, $location, $http) {

	let myCartObject;

	$http.get('app/example-cart.json')
		.then((resp) => {
			$rootScope.cart = resp.data;
			console.log($rootScope.cart);
		});// get


	myCartObject = {
		addToCart: function(item) {

		}, // addToCart

		removeFromCart: function(item) {
			

		}, // removeFromCart

		getItem: function() {

		},

		getItemCount: function(cart) {
			return cart.length;
		}, // getItemCount

		getTotalSum: function() {
			//recursively
			// myCartObject.getItem();

		} // getTotalSum

	}; // myCartObject

	return myCartObject;

}]); // factory