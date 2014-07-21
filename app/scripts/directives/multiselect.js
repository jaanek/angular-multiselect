'use strict';

/**
 * @ngdoc directive
 * @name multiselectApp.directive:multiSelect
 * @description
 * # multiSelect
 */
angular.module('multiselectApp')
  .directive('multiSelect', function () {
    return {
      templateUrl: 'views/multi-select.html',
      restrict: 'E',
      replace: true,

      scope: {
        values: '=',
        showFilters: '@',
        showOther: '@'
      },

      link: function multiSelectLink(scope, element, attrs) {
        var $dropdown = element.find('.multi-select-dropdown'),
            $container = element.find('.multi-select-container'),
            selectedOptions = [],
            otherHistory = '';

        // default options
        scope.showFilters = scope.showFilters || true;
        scope.showOther = scope.showOther || false;

        // hide dropdown when clicking away
        angular.element(document).on('click', function (e) {
          if (e.target.className.indexOf('multi-select') === -1) {
            $dropdown.removeClass('show').addClass('hide');
          }
          
        });

        // show dropdown on focus
        scope.onFocus = function onFocus() {
          $dropdown.removeClass('hide').addClass('show');
        };

        // select all options
        scope.selectAll = function selectAll() {

        };

        // deselect all options
        scope.selectNone = function selectNone() {

        };

        // select/deselect option
        scope.selectOption = function selectOption(option) {
          if (selectedOptions.indexOf(option.value) === -1) {
            selectedOptions.push(option.value);
          } else {
            selectedOptions.splice(selectedOptions.indexOf(option.value), 1);
          }

          $container.text(selectedOptions.sort().join(', '));
        };

        // "other" field
        scope.doOther = function doOther() {
          if (otherHistory.length > 0) {
            selectedOptions.splice(selectedOptions.indexOf(otherHistory), 1);
          }

          if (scope.other !== undefined && scope.other.length > 0) {
            selectedOptions.push(scope.other);
            otherHistory = scope.other;
          } else {
            otherHistory = '';
          }
        }
      }
    };
  });
