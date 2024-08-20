(function () {
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.name = "";
        $scope.check = "";
        
        $scope.sayMsg = function () {
            if ($scope.name.trim() === "") {
                $scope.check = "Please enter data first";
            } else {
                var items = $scope.name.split(',')
                                      .map(item => item.trim())
                                      .filter(item => item !== "");
                if (items.length <= 3) {
                    $scope.check = "Enjoy!";
                } else {
                    $scope.check = "Too much!";
                }
            }
        };
    }
})();
