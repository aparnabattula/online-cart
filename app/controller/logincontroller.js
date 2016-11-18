angular.module("myApp")
    .controller("loginCntrl", function ($scope,loginSvc,$location) {
        $scope.login=function () {

            $scope.customer={
                email:$scope.email,
                pwd:$scope.password
            }
            loginSvc.login()
                .then(function (response) {
                    $scope.details = response.data
                    if($scope.customer.email==$scope.details.email && $scope.customer.pwd == $scope.details.password ){
                        $location.path('/cart')
                    }
                    else{
                        $location.path('/login')
                    }
                })
                .catch(function(response){


                })
        }

    })

