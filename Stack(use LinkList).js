// Using Linked List
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }



    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    insert(data, index) {
        const newNode = new Node(data);
        if (index < 0 || index > this.size) {
            return false;
        }
        if (index === 0) {
            this.prepend(data);
        } else {
            let current = this.head;
            let prev = null;
            let currentIndex = 0;

            while (currentIndex < index) {
                prev = current;
                current = current.next;
                currentIndex++;
            }
            prev.next = newNode;
            newNode.next = current;
            this.size++;
        }

    }

    removeAt(index) {
        if (index < 0 || index >= this.size || !this.head) {
            return null;
        }
        if (index === 0) {
            const removeNodeData = this.head.data;
            this.head = this.head.next;
            this.size--;
            return removeNodeData;
        } else {

            let current = this.head;
            let prev = null;
            let currentIndex = 0;

            while (currentIndex < index) {
                prev = current;
                current = current.next;
                currentIndex++;
            }
            prev.next = current.next;
            this.size--;
            return current.data;
        }
    }

    remove(data) {
        let current = this.head;
        let prev = null;
        while (current) {
            if (current.data === data) {
                if (!prev) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return true;
            }
            prev = current;
            current = current.next;
        }
        return false;
    }
    getSize() {
        return this.size;
    }
    isEmpty() {
        return this.size === 0;
    }
    printList() {
        const res = [];
        let current = this.head;
        while (current) {
            res.push(current.data);
            current = current.next;
        }
        console.log(res);
    }

}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(element) {
        const newNode = new Node(element);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        const poppedNode = this.top;
        this.top = this.top.next;
        this.size--;
        return poppedNode.data;
    }
    topNode(){
        if(this.isEmpty()){
            console.log("Stack is empty");
        }
        return this.top.data;
    }

    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
}

