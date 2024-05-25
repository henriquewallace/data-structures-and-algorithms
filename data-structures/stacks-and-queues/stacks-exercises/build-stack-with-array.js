class Stack {
  constructor() {
    this.data = [];
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  push(value) {
    this.data.push(value);

    return this;
  }

  pop() {
    return this.data.pop();
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
console.log(myStack.push("twitter"));
console.log(myStack.pop());
console.log(myStack.peek());