describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree();
    binarySearchTree.insert(8);
    binarySearchTree.insert(10);
    binarySearchTree.insert(3);
    binarySearchTree.insert(1);
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);
    binarySearchTree.insert(4);
    binarySearchTree.insert(14);
    binarySearchTree.insert(13);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });
  // add more tests here to test the functionality of binarySearchTree
  it("should return tree root value", function() {
    expect(binarySearchTree.value).toEqual(8);
  });

  it("should place value on right of root value", function() {
    expect(binarySearchTree.right.value).toEqual(10);
  });

  it("should place value on left root value", function() {
    expect(binarySearchTree.left.value).toEqual(3);
  });

  it("should place value on left on second branch", function() {
    expect(binarySearchTree.left.left.value).toEqual(1);
  });

  it("should place value on right on second branch", function() {
    expect(binarySearchTree.right.right.value).toEqual(14);
  });
});
