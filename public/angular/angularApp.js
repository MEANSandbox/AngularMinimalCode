angular
    .module('app',[])
    .controller('HomeController',HomeController)

HomeController.$inject = ['$scope','$http']

function HomeController($scope,$http) {
    $scope.test = "This is test Text"
}