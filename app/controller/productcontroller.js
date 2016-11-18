angular.module("myApp")
    .controller("myCntrl1", function ($scope, mySvc1,$routeParams) {

        mySvc1.products()
            .then(function (response) {
                var products=[]
                var prd = response.data.products
                for(var i=0;i<prd.length;i++){

                    var name=prd[i].categories[0]
                    if(name==$routeParams.name){
                        products.push(prd[i])
                    }

                }
                $scope.productlist=products
            })
        var count = 0
        var cart = []
        var r = $routeParams.name
        $scope.addToCart = function (r) {
            var add = count++
            cart.push(r)
            // alert(cart)
        }


    })