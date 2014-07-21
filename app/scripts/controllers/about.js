'use strict';

/**
 * @ngdoc function
 * @name multiselectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the multiselectApp
 */
angular.module('multiselectApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
