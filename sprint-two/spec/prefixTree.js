describe("prefixTree", function() {
  var prefixTree;

  beforeEach(function() {
    prefixTree = makePrefixTree();
  });

  it("should have methods named 'add', 'contains', and 'depthFirstLog", function() {
    expect(prefixTree.add).toEqual(jasmine.any(Function));
    expect(prefixTree.remove).toEqual(jasmine.any(Function));
    expect(prefixTree.lookup).toEqual(jasmine.any(Function));
  });
  // add more tests here to test the functionality of prefixTree
 
});
