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

