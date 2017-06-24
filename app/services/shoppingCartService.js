app.factory('ShoppingCartService', 
	['$rootScope', '$location', '$http' ,
	function($rootScope, $location, $http) {

	let myCartObject;
	$rootScope.itemsInCart = 0;
	$rootScope.totalCartSum = 0;

	$http.get('app/example-cart.json')
		.then((resp) => {
			$rootScope.cart = resp.data;
			console.log($rootScope.cart);

			myCartObject.getItemCount($rootScope.cart);
			myCartObject.getTotalSum($rootScope.cart);

			// angular.forEach($rootScope.cart, function (item, key) {
			// 	$rootScope.itemsInCart += item.quantity;
			// });
		});// get

	myCartObject = {
		addToCart: function(item) {
			let newItem = {
				item: item,
				quantity: 1
			}
			$rootScope.cart.push(newItem);
			myCartObject.refreshCart($rootScope.cart);

		}, // addToCart

		removeFromCart: function(item) {
			let index = $rootScope.cart.indexOf(item);
			$rootScope.cart.splice(index, 1);
			console.log($rootScope.cart)

			myCartObject.refreshCart($rootScope.cart);

		}, // removeFromCart

		getItem: function() {

		},

		getItemCount: function(cart) {
			$rootScope.itemsInCart = 0;
			// let items = 0;
			angular.forEach(cart, function (item, key) {
				$rootScope.itemsInCart += item.quantity;
			});
			return $rootScope.itemsInCart;
		}, // getItemCount

		getTotalSum: function(cart) {
			$rootScope.totalCartSum = 0;
			angular.forEach(cart, function (item, key) {
				let itemTotal = (item.quantity * Number(item.item.pricePerUnit));
				$rootScope.totalCartSum += itemTotal;
			});
			return $rootScope.totalCartSum;

		}, // getTotalSum

		refreshCart: function(cart) {
			myCartObject.getItemCount(cart);
			myCartObject.getTotalSum(cart);
		}

	}; // myCartObject

	return myCartObject;

}]); // factory