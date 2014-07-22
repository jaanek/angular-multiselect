'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('multiselectApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of data objects to the scope to be used by the multi select drop down', function () {
    expect(scope.values.length).toBe(3);
  });
});
