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
});