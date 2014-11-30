    var app = angular.module('klantenApp', ['ngRoute']);

    app.config(function($routeProvider) {
           $routeProvider.when('/',{
               
               controller: 'KlantenController',
               templateUrl: '/views/klantenview.html'
           })
        });