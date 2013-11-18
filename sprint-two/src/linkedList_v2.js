var makeLinkedList = function(){
	var list = {}
	list.head = null;
	list.tail = null;
	
	list.addToTail = linkedListMethods.addToTail;
	list.removeHead = linkedListMethods.removeHead;
	list.contains = linkedListMethods.contains;
	
	return list
}

var linkedListMethods = {
	addToTail: function (val) {
		node = makeNode(val);
		if (!this.head || !this.tail){
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
	},
	removeHead: function (){
		var tempHead = this.head.val;
		delete this.head;
		this.head = this.head.next;
		return tempHead;
	},
	contains: function (val){
		var found = false;
		if (this.head.value === val){
			found = true;
			return found;
		} else {
			var that = this.head;
			while (that){
  			if (that.value === val){
	  			found = true;
		  		break;
			  }
			  that = that.next;
		  }
		}
		return found;
	}
};

var makeNode = function (val){
	var node = {};
	node.value = val;
	node.next = null;
	return node;
};

var ll = makeLinkedList();
ll.addToTail(5);
ll.addToTail(10);
ll.addToTail(15);
ll.addToTail(20);
ll.addToTail(25);
ll.contains(10);
ll.contains(15);
ll.contains(5);
ll.contains(25);