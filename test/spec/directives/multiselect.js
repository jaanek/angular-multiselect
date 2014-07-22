'use strict';

describe('Directive: multiSelect', function () {

  // load the directive's module
  beforeEach(module('multiselectApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should replace the multi-select tag', inject(function ($compile) {
    element = angular.element('<multi-select></multi-select>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('');
  }));
});
