'use strict';

/**
 * @ngdoc directive
 * @name multiselectApp.directive:multiSelect
 * @description
 * # Angular Multi Select directive
 */
angular.module('multiselectApp')
  .directive('multiSelect', function () {
    return {
      templateUrl: 'views/directives/multi-select.html',
      restrict: 'E',
      replace: true,

      scope: {
        values: '=',
        showFilters: '@',
        showOther: '@'
      },

      link: function multiSelectLink(scope, element) {
        var $dropdown = element.find('.multi-select-dropdown'),
            $container = element.find('.multi-select-container'),

            selectedOptions = [],
            otherHistory = '';

        var displayOptions = function displayOptions() {
              $container.text(selectedOptions.sort().join(', '));
            };

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
          // close all other dropdowns on the page before showing the selected one
          angular.element('body').find('.multi-select-dropdown').removeClass('show').addClass('hide');
          
          $dropdown.removeClass('hide').addClass('show');
        };

        // select all options
        scope.selectAll = function selectAll() {
          var $el;

          element.find('.multi-select-option-link').each(function () {
            $el = angular.element(this);

            if (! $el.hasClass('selected')) {
              $el.addClass('selected');
            }
          });

          angular.forEach(scope.values, function (value) {
            if (selectedOptions.indexOf(value.value) === -1) {
              selectedOptions.push(value.value);
            }
          });

          scope.doOther();

          displayOptions();
        };

        // deselect all options
        scope.selectNone = function selectNone() {
          element.find('.multi-select-option-link').each(function () {
            angular.element(this).removeClass('selected');
          });

          selectedOptions = [];
          scope.other = '';

          displayOptions();
        };

        // select/deselect option
        scope.selectOption = function selectOption($event, option) {
          var $listOption = angular.element($event.target);

          if (selectedOptions.indexOf(option.value) === -1) {
            selectedOptions.push(option.value);
            $listOption.addClass('selected');
          } else {
            selectedOptions.splice(selectedOptions.indexOf(option.value), 1);
            $listOption.removeClass('selected');
          }

          displayOptions();
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

          displayOptions();
        };
      }
    };
  });
