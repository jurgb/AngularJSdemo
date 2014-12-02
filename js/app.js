    var app = angular.module('klantenApp', ['ngRoute']);

    app.config(function($routeProvider) {

    $routeProvider
        .when('/',
            {
                controller: 'KlantenController',
               templateUrl: '/views/klantenview.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/details/:user_id',
            {
                controller: 'KlantenDetailsController',
               templateUrl: '/views/klantendetailsview.html'
            })

    });