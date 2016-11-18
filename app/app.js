var app=angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "views/categories.html",
            controller:"myCntrl"
        })
        .when("/products/:name", {
            templateUrl : "views/products.html",
            controller:"myCntrl1"
        })
        .when( "/product",{
            templateUrl:"views/productview.html.html",
            controller:"proCntrl"
        })
        .when("/cart",{
            templateUrl:"views/cart.html",
            controller:"cartCntrl"
        })
        .when("/login",{
            templateUrl:"views/login.html",
            controller:"loginCntrl"
        })
});