var app=angular.module("myApp")
app.service("cartSvc",function ($http) {
    var cart=[];
    this.addItem=function (productId) {
        cart.push(productId);
    };
    this.getCount=function () {
        return cart.length;
    }
    this.removeItem=function (productId) {
        var index=cart.indexOf(productId);
        cart.splice(index,1);

    };
    this.upadateQuantity=function (product) {

    };
    this.isAdded=function (product) {

    };

});