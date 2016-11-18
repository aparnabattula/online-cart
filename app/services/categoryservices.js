var app=angular.module("myApp")
app.service("mySvc",function ($http) {
    this.categories=function () {
        return $http.get("http://localhost/commercetest/categories.php");
    }
    
});