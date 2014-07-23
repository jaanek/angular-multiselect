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
        showOther: '@',
        valueField: '@',
        labelField: '@'
      },

      link: function multiSelectLink(scope, element, attrs) {
            // dropdown element
        var $dropdown = element.find('.multi-select-dropdown'),

            // container element
            $container = element.find('.multi-select-container'),

            // selected options array
            selectedOptions = [],

            // "other" value buffer
            otherHistory = '',

            /*
              Display options in textbox
            */
            displayOptions = function displayOptions() {
              $container.text(selectedOptions.sort().join(', '));
            };

        // show filters default value
        attrs.$observe('showFilters', function (showFilters) {
          scope.showFilters = showFilters || true;
        });

        // show other default value
        attrs.$observe('showOther', function (showOther) {
          scope.showOther = showOther || false;
        });

        // value field default value
        attrs.$observe('valueField', function (valueField) {
          scope.valueField = valueField || 'value';
        });

        // label field default value
        attrs.$observe('labelField', function (labelField) {
          scope.labelField = labelField || 'label';
        });

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

          // highlight all un-highlighted elements
          element.find('.multi-select-option-link').each(function () {
            $el = angular.element(this);

            if (! $el.hasClass('selected')) {
              $el.addClass('selected');
            }
          });

          // add all to selected buffer
          angular.forEach(scope.values, function (value) {
            if (selectedOptions.indexOf(value[scope.valueField]) === -1) {
              selectedOptions.push(value[scope.valueField]);
            }
          });

          // if other field, populate value
          scope.doOther();

          // output
          displayOptions();
        };

        // deselect all options
        scope.selectNone = function selectNone() {
          // remove highlighting from all elements
          element.find('.multi-select-option-link').each(function () {
            angular.element(this).removeClass('selected');
          });

          // reset data
          selectedOptions = [];
          scope.other = '';

          // output
          displayOptions();
        };

        // select/deselect option
        scope.selectOption = function selectOption($event, option) {
          var $listOption = angular.element($event.target);

          // toggle option and highlighting
          if (selectedOptions.indexOf(option[scope.valueField]) === -1) {
            selectedOptions.push(option[scope.valueField]);
            $listOption.addClass('selected');
          } else {
            selectedOptions.splice(selectedOptions.indexOf(option[scope.valueField]), 1);
            $listOption.removeClass('selected');
          }

          // output
          displayOptions();
        };

        // "other" field
        scope.doOther = function doOther() {
          // if otherHistory, remove from selected options array
          if (otherHistory.length > 0) {
            selectedOptions.splice(selectedOptions.indexOf(otherHistory), 1);
          }

          // if new other value, push to array otherwise reset history buffer
          if (scope.other !== undefined && scope.other.length > 0) {
            selectedOptions.push(scope.other);
            otherHistory = scope.other;
          } else {
            otherHistory = '';
          }

          // output
          displayOptions();
        };
      }
    };
  });
