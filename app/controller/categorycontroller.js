angular.module("myApp")
    .controller("myCntrl", function ($scope, mySvc,cartSvc) {

        mySvc.categories()
            .then(function (response) {
                $scope.categories = response.data.product_categories
            })
        .catch(function(response){


        })
        $scope.mycount=cartSvc;
        $scope.$watch("mycount.getCount()",function(x,y){
            $scope.mycounter=x
        })
    })