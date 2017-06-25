app.factory('ShoppingCartService', 
	['$rootScope', '$location', '$http' ,
	function($rootScope, $location, $http) {

	let myCartObject;
	$rootScope.cart;

	$http.get('app/example-cart.json')
		.then((resp) => {
			$rootScope.cart = resp.data;
			console.log('cart contents:')
			console.log($rootScope.cart);
		}); // get

	myCartObject = {
		addToCart: function(item) {
			let existingProductIndex = $rootScope.cart.findIndex(obj => obj.item.id === item.id);
			console.log('existingProductIndex')
			console.log(existingProductIndex)
			if(existingProductIndex != -1) {
				console.log('adding 1 to quant')
				$rootScope.cart[existingProductIndex].quantity += 1;
			} else {
				console.log('adding new item')
				let newItem = {
					item: item,
					quantity: 1
				}
				$rootScope.cart.push(newItem);
			}
			console.log('cart after addition')
			console.log($rootScope.cart)
		}, // addToCart

		removeFromCart: function(item) {
			let existingProduct = $rootScope.cart.findIndex(obj => obj.item.id === item.id); 
			if(existingProduct != -1) {
				$rootScope.cart[existingProduct].quantity -= 1;
				
				// remove object from cart if quantity is now 0
				if($rootScope.cart[existingProduct].quantity === 0) {
					$rootScope.cart.splice(existingProduct, 1);
				}
				console.log('cart AFTER removal')
				console.log($rootScope.cart)
			} else { 
				console.warn('Sorry, You cant delete something from nothing'); 
			}
		}, // removeFromCart

		removeAllByItemType: function(item) {
			let existingProduct = $rootScope.cart.findIndex(obj => obj.item.id === item.id);
			if(existingProduct != -1) {		
				// remove object completely from cart
				$rootScope.cart.splice(existingProduct, 1);
				// $rootScope.cart[existingProduct].quantity = 0
			} else { 
				console.warn('Sorry, You cant delete something from nothing'); 
			}
		}, // removeAllByItemType

		lookupItemInCart: function(item) {
			if (typeof $rootScope.cart !== 'undefined'){
				let amountSelected = 0;
				let existingProductIndex = $rootScope.cart.findIndex(obj => obj.item.id === item.id);
				
				if(existingProductIndex != -1) {
					amountSelected = $rootScope.cart[existingProductIndex].quantity;
				}
				return amountSelected;
			}
		},

		lookupCartItemsCount: function() {
			let itemsInCart = 0;
			angular.forEach($rootScope.cart, function (item, key) {
				itemsInCart += item.quantity;
			});
			return itemsInCart;
		},

		lookupCartTotalSum: function() {
			let totalCartSum = 0;
			angular.forEach($rootScope.cart, function (item, key) {
				let itemTotal = (item.quantity * Number(item.item.pricePerUnit));
				totalCartSum += itemTotal;
			});
			return totalCartSum;
		}, // lookupCartTotalSum
		// getTotalSum: function(cart) {
		// 	$rootScope.totalCartSum = 0;
		// 	angular.forEach(cart, function (item, key) {
		// 		let itemTotal = (item.quantity * Number(item.item.pricePerUnit));
		// 		$rootScope.totalCartSum += itemTotal;
		// 	});
		// 	return $rootScope.totalCartSum;
		// }, // getTotalSum

	}; // myCartObject

	return myCartObject;

}]); // factory