(function () {
    'use strict';
    
    angular.module('LunchCheckApp', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunchMenu = '';
        $scope.lunchCheckMessage = '';

        $scope.checkLunchMenu = () => {
            const lunchItems = $scope.lunchMenu
                .split(',')
                .filter(item => item.trim());
            $scope.lunchCheckMessage = $scope.getLunchMenuMessage(lunchItems.length);
        };

        $scope.getLunchMenuMessage = (numberOfItems) => {
           if(!numberOfItems) {
                return 'Please enter data first';
            } else if (numberOfItems < 4) {
                return 'Enjoy!'
            } else {
                return 'Too much!';
            }
        };
    }
    
    })();
    