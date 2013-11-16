describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("it should contain value that was added to it with '.add'", function() {
    set.add('wassup');
    expect(set.contains('wassup')).toEqual(true);
  });
  it("it should not contain value after being removed", function() {
    set.add('yo');
    set.add('me');
    set.remove('yo');
    expect(set.contains('yo')).toEqual(false);
  });
  it("it should not increse in size after adding the same value", function() {
    set.add('yo');
    set.add('yo');
    expect(Object.keys(set._storage).length).toEqual(1);
  });
});