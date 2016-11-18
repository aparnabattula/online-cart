var app=angular.module("myApp")
app.service("mySvc1",function ($http) {
        this.products=function () {
            return $http.get("http://localhost/commercetest/products.php");
        }

    });