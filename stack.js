//Make a stack in JS!

var Stack = function() {
  this.list = new Array();
};

Stack.prototype.push = function(item) {
  this.list.push(item);
};

Stack.prototype.pop = function(){
  if (this.list.length > 0) {
    this.list.pop();
  };
};

Stack.prototype.peek = function(){
  return this.list[this.list.length-1]
}


//Tests for the stack

//Check to see if new stack is empty
var my_stack = new Stack();
console.log(my_stack.list.length === 0);

//Test if you can add item to stack
my_stack.push(3);
console.log(my_stack.list[0] === 3);

//Test if you can remove item from stack
my_stack.pop()
console.log(my_stack.list.length === 0);

//Test if you can peek at the top of the stack
my_stack.push(3);
my_stack.push(4);
console.log(my_stack.peek()===4);

//Test to see if you remove the correct item from teh stack
my_stack.pop()
console.log(my_stack.peek()===3);