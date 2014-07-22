'use strict';

describe('Directive: multiSelect', function () {

  // load the directive's module
  beforeEach(module('multiselectApp'));

  // load templates
  beforeEach(module('app/views/directives/multi-select.html'));

  var element,
      scope,
      template;

  beforeEach(inject(function ($rootScope, $compile, $templateCache) {
    scope = $rootScope.$new();

    // load directive template & save to cache
    template = $templateCache.get('app/views/directives/multi-select.html');
    $templateCache.put('views/directives/multi-select.html', template);

    // add values to scope
    scope.values = [
      { value: 'one', label: 'Option 1' },
      { value: 'two', label: 'Option 2' },
      { value: 'three', label: 'Option 3' }
    ];

    // create multi select element
    element = angular.element('<multi-select values="values" show-filters="true" show-other="true"></multi-select>');
    element = $compile(element)(scope);
    scope.$digest();

    // console.log(element.scope().values);
  }));

  it('should replace the multi-select tag', function () {
    expect(element.html()).not.toBe('<multi-select values="values" show-filters="true" show-other="true"></multi-select>');
  });


  it('should create a values scope array');
  it('should create a toggle dropdown');
  it('should show filters');
  it('should output all values');
  it('should show an other textbox');
  it('should show the dropdown on focus');
  it('should hide the dropdown on blur');
  it('should show an option as selected when clicked');
  it('should show an option as unselected when clicked twice');
  it('should add an option value to the textbox');
  it('should remove an option value from the textbox');
  it('should add the selected option to the selectedOptions array');
  it('should remove the selected option from the selectedOptions array');
  it('should select all options');
  it('should unselect all options');
  it('should add an other option on blur');
});
