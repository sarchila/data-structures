describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  // Add more tests here to test the functionality of tree.
  it("should have 2 children", function() {
    tree.addChild('div');
    tree.addChild('tag');
    expect(Object.keys(tree.children).length).toEqual(2);
  });
  it("should have two children that have one child each", function() {
    var branchA = tree.addChild('a');
    var branchB = tree.addChild('b');
    branchB.addChild('yo');
    branchA.addChild('waddup');
    expect(Object.keys(tree.children).length).toEqual(2);
    expect(Object.keys(branchA.children).length).toEqual(1);
    expect(Object.keys(branchB.children).length).toEqual(1);
  });

  it("should return true is target is found", function (){
    var branchB = tree.addChild('b');
    var branchC = tree.addChild('c');
    var leafCc = branchC.addChild('Cc');
    var branchD = tree.addChild('d');
    var leafDd = branchD.addChild('Dd');
    expect(tree.contains('Dd')).toEqual(true);
  });
});