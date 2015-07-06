


/*
var myApp = angular.module('myApp', ['ngRoute', 'phoneCatControllers']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('src/', {
        templateUrl: 'partials/search-form.html',
        controller: 'PhoneSearchCtrl'
    }).when('phones/:kwd', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
    }).when('phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
    }).otherwise({
        redirectTo: '/'
    });
}]);
*/

var myApp = angular.module('myApp', ['ui.router', 'phoneCatControllers']);
myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('index',{
        url: '/',
        templateUrl: 'partials/search-form.html',
        controller: 'PhoneSearchCtrl'
    }).state('phoneList',{
        url: '/phones/:kwd',
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
    }).state('phoneDetails',{
        url: '/phone/:phoneId',
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
    });

    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");

}]);





