app.factory('ShoppingCartService', 
	['$rootScope', '$location', '$http' ,
	function($rootScope, $location, $http) {

	let myCartObject;
	$rootScope.itemsInCart = 0;
	$rootScope.totalCartSum = 0;
	$rootScope.cart;

	$http.get('app/example-cart.json')
		.then((resp) => {
			$rootScope.cart = resp.data;
			console.log('cart contents:')
			console.log($rootScope.cart);

			myCartObject.getItemCount($rootScope.cart);
			myCartObject.getTotalSum($rootScope.cart);

			// angular.forEach($rootScope.cart, function (item, key) {
			// 	$rootScope.itemsInCart += item.quantity;
			// });
		});// get

	myCartObject = {
		addToCart: function(item) {
			let existingProduct = $rootScope.cart.findIndex(obj => obj.item.id === item.id);
			console.log('existingProduct')
			console.log(existingProduct)
			if(existingProduct != -1) {
				console.log('adding 1 to quant')
				$rootScope.cart[existingProduct].quantity += 1;
			} else {
				console.log('adding new item')
				let newItem = {
					item: item,
					quantity: 1
				}
				$rootScope.cart.push(newItem);
			}
			console.log('before explicit update')
			console.log($rootScope.cart)
			// myCartObject.refreshCart($rootScope.cart);
			// console.log('refreshed cart')
			// console.log($rootScope.cart)
		}, // addToCart

		removeFromCart: function(item) {
			let existingProduct = $rootScope.cart.findIndex(obj => obj.item.id === item.id);//indexOf(item);
			console.log(existingProduct);
			if(existingProduct != -1) {
				$rootScope.cart[existingProduct].quantity -= 1;
				
				// if it was the last of these items in cart, fully remove from cart
				if($rootScope.cart[existingProduct].quantity === 0) {
					$rootScope.cart.splice(existingProduct, 1);
				}
				myCartObject.refreshCart($rootScope.cart);
				console.log('refreshed cart')
				console.log($rootScope.cart)
			} 
			// $rootScope.cart.splice(existingProduct, 1);
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

		getCart: function() {
			return $rootScope.cart;
		}, //getCart

		refreshCart: function(cart) {
			myCartObject.getItemCount(cart);
			myCartObject.getTotalSum(cart);
		}

	}; // myCartObject

	return myCartObject;

}]); // factory