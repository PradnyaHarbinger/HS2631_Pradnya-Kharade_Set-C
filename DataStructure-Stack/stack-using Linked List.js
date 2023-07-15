// Define a node class for the linked list
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Define the stack class
  class Stack {
    constructor() {
      this.top = null;
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.top === null;
    }
  
    // Push an item onto the stack
    push(data) {
      const newNode = new Node(data);
      newNode.next = this.top;
      this.top = newNode;
    }
  
    // Pop an item from the stack
    pop() {
      if (this.isEmpty()) {
        return null; // Stack is empty
      }
      const poppedNode = this.top;
      this.top = this.top.next;
      poppedNode.next = null;
      return poppedNode.data;
    }
  
    // Peek at the top item of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        return null; // Stack is empty
      }
      return this.top.data;
    }
  }
  
  // Example usage:
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log("The peek ele. of stack i.e. top element: ",stack.peek()); // Output: 3
  console.log("Pop() operation, removing peek ele.: ",stack.pop());  // Output: 3
  console.log("Pop() operation: ",stack.pop());  // Output: 2
  console.log("Checks whether stack is empty or not: ",stack.isEmpty()); // Output: false
  console.log("Pop() operation: ",stack.pop());  // Output: 1
  console.log("Checks whether stack is empty or not: ",stack.isEmpty()); // Output: true
  console.log("Underflow condition as stack is empty: ",stack.pop());  // Output: null (stack is empty)
  