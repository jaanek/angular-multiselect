'use strict';

/**
 * @ngdoc function
 * @name multiselectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the multiselectApp
 */
angular.module('multiselectApp')
  .controller('MainCtrl', function ($scope) {
    $scope.values = [
      {
        value: 'one',
        label: 'Option 1'
      },

      {
        value: 'two',
        label: 'Option 2'
      },

      {
        value: 'three',
        label: 'Option 3'
      }
    ];
  });
