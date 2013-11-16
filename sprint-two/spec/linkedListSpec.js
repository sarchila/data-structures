describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of linkedList
  it("should return head and tail after adding to tail only once", function() {
    linkedList.addToTail(23);
    expect(linkedList.tail.value).toEqual(23);
    expect(linkedList.head.value).toEqual(23);
  });

  it("should return head with first value after adding a second value to tail", function() {
    linkedList.addToTail(23);
    linkedList.addToTail(50);
    expect(linkedList.tail.value).toEqual(50);
    expect(linkedList.head.value).toEqual(23);
  });

  it("should update '.next' property of head after adding second value to tail", function(){
    linkedList.addToTail(12);
    linkedList.addToTail(40);
    expect(linkedList.head.next).toEqual(linkedList.tail);
  });

  it("should return head value when one item added", function(){
    linkedList.addToTail('a');
    expect(linkedList.removeHead()).toEqual('a');
  });

  it("should have null head when one item added then removed", function(){
    linkedList.addToTail('a');
    linkedList.removeHead();
    expect(linkedList.head).toEqual(null);
  });

  it("should have null tail when one item added then removed", function(){
    linkedList.addToTail('a');
    linkedList.removeHead();
    expect(linkedList.tail).toEqual(null);
  });

  it("should update head when multiple items added then some removed", function(){
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.addToTail('c');
    linkedList.removeHead();
    linkedList.removeHead();
    expect(linkedList.head.value).toEqual('c');
  });

  it("should return true if passed in value is in list", function(){
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    expect(linkedList.contains('b')).toEqual(true);
  });

  it("should return false if passed in value is not in list", function(){
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.addToTail('c');
    expect(linkedList.contains('z')).toEqual(false);
  });

  it("should return false if passed in value is not in list", function(){
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.addToTail('c');
    linkedList.removeHead();
    linkedList.removeHead();
    expect(linkedList.contains('b')).toEqual(false);
  });

  it("should return previous node value", function() {
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    expect(linkedList.tail.previous.value).toEqual(linkedList.head.value);
  });

  it("should return previous node value after adding three nodes", function() {
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.addToTail('c');
    expect(linkedList.tail.previous.value).toEqual(linkedList.head.next.value);
  });

  it("should be able to add to head", function() {
    linkedList.addToHead('a');
    linkedList.addToHead('b');
    linkedList.addToHead('c');
    expect(linkedList.tail.previous.value).toEqual(linkedList.head.next.value);
  });

  it("should be able to add to remove tail", function() {
    linkedList.addToHead('a');
    linkedList.addToHead('b');
    linkedList.addToHead('c');
    linkedList.removeTail();
    expect(linkedList.tail.previous.value).toEqual(linkedList.head.value);
  });
});