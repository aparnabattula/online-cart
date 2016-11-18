var app=angular.module("myApp")
app.service("loginSvc",function ($http) {
    this.login=function () {
        return $http.get("data/login.json");
    }

});