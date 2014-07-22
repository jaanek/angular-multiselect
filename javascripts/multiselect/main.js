'use strict';

angular.module('multiselectApp', [ 'multiselectApp.directives' ])
.controller('MainCtrl', [ '$scope', function ($scope) {
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
}]);
