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

// Doubly linked list

function DoubleLinkedList() {
  this.head = null;
}

DoubleLinkedList.prototype.insert = function(value) {
  var node =  {
    val: value,
    next: null,
    prev: null
  }
  if (!(this.head)) {
    this.head = node;
  } else {
    var currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    node.prev = currentNode;
  }
}




DoubleLinkedList.prototype.remove = function(value) {
  //case 0: no items in linked list
  //case 1: 1st item in linked list - set head = null 
  //case 2: item in linked list between nodes: set next of previous node to node after current
  //case 3: last item in linked list - set previous node next = null
  //case 4: can't find item in linked list
  if (this.head) { // must have item in linked list
    if (this.head.val === value){ //removed item is at head
      if (this.head.next) { //other items in list
        this.head.next.prev = null;
        this.head = this.head.next;
      } else { //only 1 item in list
        this.head = null;
      }
    } else { //removed item isn't at head
      var currentNode = this.head;
      while (currentNode.val !== value && currentNode.next) {
        currentNode = currentNode.next;
      }
      if (currentNode.val === value) { //if item is in linked list
        if (currentNode.next) { //reset pointers if item is in between two nodes
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
        } else { //reset pointers if item is last in linked list
          currentNode.prev.next = null;
        }
      }
    }
  }
}


// Test insert method for double linked list
var double_linked_list = new DoubleLinkedList();
double_linked_list.insert("3");
console.log(double_linked_list.head.val === "3");
console.log(double_linked_list.head.next === null);
console.log(double_linked_list.head.prev === null);
double_linked_list.insert("6");
console.log(double_linked_list.head.next.val === "6");
console.log(double_linked_list.head.next.prev.val === "3");
console.log(double_linked_list.head.prev === null);

// Test remove method for double linked list
