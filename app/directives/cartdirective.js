var app = angular.module("myApp")
app.directive("addToCart", function () {
    return {
        restrict: "E",
        scope: {
            productId: "@"
        },
        controller: function ($scope, cartSvc) {


            $scope.isAddedToCart = false

            $scope.addToCart = function () {
                if ($scope.isAddedToCart) {
                    cartSvc.removeItem($scope.productId);
                    $scope.isAddedToCart = false;
                } else {
                    cartSvc.addItem($scope.productId);
                    $scope.isAddedToCart = true;
                }
            }
        },

        template: "<button class='btn btn-primary view' ng-click='addToCart()'><b ng-show='!isAddedToCart'>AddCart</b><b ng-show='isAddedToCart' >Added To Cart</b></button>"

    }
})