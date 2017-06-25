# Shopping-Cart Service - Angular 1 App

## Description

This is a small SPA built in Anuglar 1 to demo a basic web store functionality. It includes a main view that lists all available products, and nav links to view products by category. 
A shopping-cart service is accessible accross all views of the application. This service handles adding and removing items to a shopping cart, as well as listing the total number of items and total cost in the cart.


## Instructions

1. Clone this repository to your local machine `> git clone https://github.com/ampratt/shoppingCart_angular.git`
2. CD to the folder `> cd (dir name)`
4. Run `> npm install` to install the project dependencies
5. Start the app with `> gulp` (you will need [gulp](http://gulpjs.com/) installed!)


### Notes

The demo app starts up with an initial shopping cart already filled with 2 items, and 2 of each item (4 in total).
Items can be added and removed from any view in the app, and can also be removed from the dropdown cart window in the top right corner.

* The entry point is in the main `/app` directory is `app.js`
* The app currently uses some dummy data, found in `data.json` as well as an initial cart in `example-cart.json`. This data is fetched from the controllers and could easily be from a db as well.
* The two primary controller and their views are under `app/components/productList` and `category`. 
* Shared sub-components provide the sites universal `header` and `cartWindow`.
* Two Services are being used. The first is the actual `ShoppingCartService` itself, and secondly the `productListService` handles setting up initial data for the routes.


Aaron Pratt