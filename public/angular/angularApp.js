angular
    .module('app',[])
    .controller('HomeController',HomeController)

HomeController.$inject = ['$scope','$http']

function HomeController($scope,$http) {
    $scope.test = "This is test Text And Your Angular App is working Fine now let's add some more code this is only a wrapper"
}