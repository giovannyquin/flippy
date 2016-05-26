'use strict';

describe('Directive: kkFlippy', function () {

  // load the directive's module and view
  beforeEach(module('kynectApp'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<kk-flippy></kk-flippy>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the kkFlippy directive');
  }));
});