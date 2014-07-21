'use strict';

/**
 * @ngdoc overview
 * @name multiselectApp
 * @description
 * # multiselectApp
 *
 * Main module of the application.
 */
angular
  .module('multiselectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
