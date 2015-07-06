var phoneCatControllers = angular.module('phoneCatControllers', []);

phoneCatControllers.controller('PhoneSearchCtrl', ['$scope', '$state','$stateParams',
    function($scope, $state,$stateParams) {
        $scope.processForm = function(kwd) {
            $state.go('phoneList', {kwd: $scope.query});
        };
    }]);

phoneCatControllers.controller('PhoneListCtrl', ['$scope', '$http','$stateParams','$filter',
    function($scope, $http,$stateParams,$filter) {
        $http.get('phones/phones.json').success(function(data) {
          $scope.phones = $filter('filter')(data,{name:$stateParams.kwd});
        });
        $scope.orderProp = 'age';
    }]);

phoneCatControllers.controller('PhoneDetailCtrl', ['$scope', '$stateParams', '$http',
    function($scope, $stateParams,$http) {
        //$scope.phoneId = $stateParams.phoneId;
        $http.get('phones/' + $stateParams.phoneId + '.json').success(function(data) {
          $scope.phone = data;
        });
    }]);
