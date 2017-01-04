describe("Hello World", function() {
  var element;
  var $scope;
  // beforeEach(module("app"))
  beforeEach(inject(function($compile, $rootScope) {
    $scope = $rootScope;
    element = angular.element("<div simple> {{2 + 2}}</div>")
    $compile(element)($rootScope)
  }))

  it("should equal to 4", function() {
    $scope.digest()
    except(element.html()).toBe("4");
  })
  describe(simple, function(){
    it("it should add a class of plain", function(){
      except(element.hasClass("plain")).toBe(true)
    })
  })
})