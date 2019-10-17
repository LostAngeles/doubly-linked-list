const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let node = new Node(data);

        if (this.length === 0) {
            this._head = node;
            this._tail = node;
        }
        else {
            node.prev = this._tail;
            this._tail.next = node;            
            this._tail = node;
        }  
      this.length++;
      return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        if (index < 0 || this.length <= index ) return null;
           
        let ongoing = this._head;
        let position = 0;
    
        while (position < index) {
            ongoing = ongoing.next;
            position++;
        }    
        
        return ongoing.data;
    }

    insertAt(index, data) {
        if (index < 0 || this.length < index) return false;         
          
        let node = new Node(data);
    
        if (index === 0) {
            node.next = this._head;
            this._head = node;
        }

        else {
            let ongoing = this._head;
            let previousOne = null;
            let location = 0;
    
            while (location < index) {
                previousOne = ongoing;
                ongoing = ongoing.next;
                location++;
            }
    
            previousOne.next = node;
            node.next = ongoing;
          }
    
          this.length++;
          return this;
    }

    isEmpty() {
        return (!this.length);                
    }

    clear() {        
        this._head.data = null;
        this._tail.data = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        if (index < 0 || this.length <= index ) return null;
       
        let ongoing = this._head;
    
        if (index === 0) this.head = ongoing.next;       
        
        else {
            let previousOne = null;
            let location = 0;
      
            while (location < index) {
              previousOne = ongoing;
              ongoing = ongoing.next;
              location++;
            }
      
            previousOne.next = ongoing.next;
          }
      
          this.length--;
          return this;
    }

    reverse() {
        if (!this._head) return false;

        let node = this._head;
        this._head = this._tail;
        this._tail = node;

        let previousOne = null;
        let nextOne;

        for (let i = 0; i < this.length; i++) {
            nextOne = node.next;
            node.next = previousOne;
            previousOne = node;
            node = nextOne;
        }        
        return this;
    }

    indexOf(data) {
        let ongoing = this._head;
        let position = 0;

        while (ongoing) {
         if (ongoing.data === data) return position;
       
        ongoing = ongoing.next;
        position++;
      }

      return -1;
    }
}

module.exports = LinkedList;
