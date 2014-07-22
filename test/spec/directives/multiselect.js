'use strict';

describe('Directive: multiSelect', function () {

  // load the directive's module
  beforeEach(module('multiselectApp'));

  // load templates
  beforeEach(module('app/views/directives/multi-select.html'));

  var element,
      scope,
      template;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should replace the multi-select tag', inject(function ($compile, $templateCache) {
    template = $templateCache.get('app/views/directives/multi-select.html');

    console.log(template);

    /*scope.values = [
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

    element = angular.element('<multi-select values="values" show-filters="true" show-other="true"></multi-select>');
    element = $compile(element)(scope);
    scope.$digest();

    console.log(element);

    expect(element.text()).toBe('');*/
  }));
});
