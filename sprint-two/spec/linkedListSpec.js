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
    expect(linkedList.tail).toEqual({value:23, next: null});
    expect(linkedList.head).toEqual({value:23, next: null});
  });

  it("should return head with first value after adding a second value to tail", function() {
    linkedList.addToTail(23);
    linkedList.addToTail(50);
    expect(linkedList.tail).toEqual({value:50, next: null});
    expect(linkedList.head).toEqual({value:23,next: {value:50, next: null}});
  });

  it("should update '.next' property of head after adding second value to tail", function(){
    linkedList.addToTail(12);
    linkedList.addToTail(40);
    expect(linkedList.head.next).toEqual(linkedList.tail);
  });
});