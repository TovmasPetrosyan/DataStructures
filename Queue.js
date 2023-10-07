class Queue{
    constructor(){
      this.queue = [];
      this.front = 0;
      this.rear = 0;
        }
    enqueue(element){
        this.queue[this.rear] = element; 
        this.rear++;
    }
    dequeue(){
        if(this.isEmpty()){
            return null;
        }
        const delItem = this.queue[this.front];
        this.front++;
        return delItem;
    }
    frontQueue() {
        if (this.isEmpty()) {
          return null;
        }    
        return this.queue[this.front];
      }

    isEmpty(){
        return this.rear === this.front;
    }
    size(){
        return this.rear - this.front;
    }
    print(){
        for (let i = this.front; i < this.rear; i++) {
            console.log(this.queue[i]);
          }
    }
}


