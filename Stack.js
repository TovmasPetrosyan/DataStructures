//Using an Array
class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
        }
        return this.stack.pop();
    }
    top(){
        if(this.isEmpty()){
            console.log("Stack is empty");
        }
        return this.stack[this.stack.length - 1];
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    getSize() {
        return this.stack.length;
    }
}

