function LinkedList(){
  this.head = null;
}

LinkedList.prototype.insert = function(value) {
  var node = {
    val: value,
    next: null
  }
  if (!(this.head)) {
    this.head = node 
  }
  else {
      currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = node;
  }
}

LinkedList.prototype.find = function(value) {
  var currentNode = this.head;
  var previousNode = this.head;
  while (currentNode.val !== value && currentNode.next) {
    previousNode = currentNode;
    currentNode = currentNode.next;
  } 
  if (currentNode.val === value) {
    return currentNode;
  } 
}

LinkedList.prototype.remove = function(value) {
  //case 0: no items in linked list
  //case 1: 1st item in linked list - set head = null 
  //case 2: item in linked list between nodes: set next of previous node to node after current
  //case 3: last item in linked list - set previous node next = null
  //case 4: can't find item in linked list

  //check if linked list has items in it
  if (this.head) {
    //case where 1st node needs to be removed
    if (this.head.val === value){
      if (this.head.next) {
        this.head = this.head.next;
      } else {
        this.head = null;
      }
    }
    else {
      var currentNode = this.head;
      var previousNode = this.head;
      while (currentNode.val !== value && currentNode.next) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      if (currentNode.val === value) {
        if (currentNode.next) {
          previousNode.next = currentNode.next;
        } else {
          previousNode.next = null;
        }
      }
    }
  }
}


// Test insert method for LinkedList
var linked_list = new LinkedList();
linked_list.insert("3");
console.log(linked_list.head.val === "3");
console.log(linked_list.head.next === null);
linked_list.insert("4");
console.log(linked_list.head.val === "3");
console.log(linked_list.head.next.val === "4");
console.log(linked_list.head.next.next === null);

// Test remove method for LinkedList
linked_list.insert("5");
linked_list.remove("5");
console.log(linked_list.head.next.next === null)
linked_list.remove("4")
console.log(linked_list.head.next === null)
linked_list.remove("3")
console.log(linked_list.head === null)







