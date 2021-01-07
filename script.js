let app = angular.module("myApp",[])

app.controller("myCtrl",function($scope,$http){
    $scope.name = "pavan"
    $http({ method: "get", url:"https://jsonplaceholder.typicode.com/todos/"}).then(function(response){
        $scope.myResponse = response.data
    },function(response){
        $scope.myResponse = response.statusText
    })
})