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

  it("should find value in BST", function() {
    expect(binarySearchTree.contains(6)).toEqual(true);
    expect(binarySearchTree.contains(13)).toEqual(true);
    expect(binarySearchTree.contains(4)).toEqual(true);
    expect(binarySearchTree.contains(5)).toEqual(false);
  });

  it("should log every value", function(){
    var inOrder = binarySearchTree.depthFirstLog(function(v) {return v;}, true);
    expect(inOrder).toEqual([1,3,4,6,7,8,10,13,14]);
  });

  it("should find closest value in BST", function() {
    expect(binarySearchTree.findClosest(11)).toEqual(10);
  // code below makes a bst with a million random numbers from
  // 0 to 3,000,000
  //
  //   var i = 0;
  //   var b = []
  //   while ( i < 3000000){
  //     b.push(i);
  //     i++;
  //   }
  //   b = _.shuffle(b)
  //   b = b.slice(2000000);
  //   bst = makeBinarySearchTree();
  //   _.each(b,function(val){
  //     bst.insert(val);
  //   });
  // });
  });
});