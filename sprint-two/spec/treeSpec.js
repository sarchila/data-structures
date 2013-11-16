describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree('a');
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
    expect(tree.children.length).toEqual(2);
  });
  it("should have two children that have one child each", function() {
    var branchA = tree.addChild('a');
    var branchB = tree.addChild('b');
    branchB.addChild('yo');
    branchA.addChild('waddup');
    expect(tree.children.length).toEqual(2);
    expect(branchA.children.length).toEqual(1);
    expect(branchB.children.length).toEqual(1);
  });

  it("should return true is target is found", function (){
    var branchB = tree.addChild('b');
    var branchC = tree.addChild('c');
    var leafCc = branchC.addChild('Cc');
    var branchD = tree.addChild('d');
    var leafDd = branchD.addChild('Dd');
    expect(tree.contains('Cc')).toEqual(true);
  });

  it("should return its parent", function (){
    var branchA = tree.addChild('a');
    var branchB = tree.addChild('b');
    var branchAa = branchA.addChild('Aa');
    expect(branchA.parent).toEqual(tree);
    expect(branchB.parent).toEqual(tree);
    expect(branchAa.parent).toEqual(branchA);
  });

  it("should have no parent after remove from parent", function() {
    var branchA = tree.addChild('a');
    var branchAa = branchA.addChild('Aa');
    branchAa.removeFromParent();
    expect(branchAa.parent).toEqual(null);
    expect(branchA.children.length).toEqual(0);
  });

  it("should remove the correct child from parent, even with same value", function() {
    var branchA = tree.addChild('A');
    var branchAa = branchA.addChild('Aa');
    var branchB = tree.addChild('B');
    var branchBb = branchA.addChild('Bb');
    var branchAllCapsA = tree.addChild('A');
    var branchAllCapsAA = branchAllCapsA.addChild('AA');
    expect(tree.contains('A')).toEqual(true);
    expect(tree.contains('Aa')).toEqual(true);
    branchA.removeFromParent();
    expect(branchA.parent).toEqual(null);
    expect(tree.contains('A')).toEqual(true);
    expect(tree.contains('Aa')).toEqual(false);
    expect(tree.contains('AA')).toEqual(true);
    expect(branchA.contains('Aa')).toEqual(true);
  });
});