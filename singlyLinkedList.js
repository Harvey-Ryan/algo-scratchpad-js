
// Doubly Linked List
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    // add a node to the end of the linked list (tail)
    append(value){
        // if list is empty
        if(!this.tail) {
            this.head = this.tail = new Node(value)
        } else {
            let oldTail = this.tail;
            this.tail = new Node(value);
            oldTail.next = this.tail;
            this.tail.prev = oldTail;
        }
    }
    
    // add a node to the beginning of the linked list (head)
    prepend(value){
        // if list is empty
        if(!this.head) {
            this.head = this.tail = new Node(value)
        } else {
            let oldHead = this.head;
            this.head = new Node(value);
            oldHead.prev = this.head;
            this.head.next = oldHead;
        }
    }

    // Delete first node (head)
    deleteHead(){
        // if list is empty
        if(!this.head) {
            return null;
        } else {
            let removedHead = this.head;
            // if list has only one node
            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
            this.head = this.head.next;
            this.head.prev = null;
            }
            console.log("Deleted Head Node: ", removedHead);
            console.log("Deleted Head Value: ", removedHead.value);
            return removedHead.value;
        }
    }

    // Delete last node (tail)
    deleteTail(){
        // if list is empty
        if(!this.tail) {
            return null;
        } else {
            let removedTail = this.tail;
            // if list has only one node
            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            }
            console.log("Deleted Tail Node: ", removedTail);
            console.log("Deleted Tail Value: ", removedTail.value);
            return removedTail.value;
        }
    }

    // Search for a node in the linked list
    search(value){
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}

class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev || null;
        this.next = next || null;
    }
}

let list = new LinkedList();

list.append(1);
console.log("Append 1: ", list);
list.append(2);
console.log("Append 2: ", list)
list.append(2);
console.log("Append 2b: ", list)
list.append(3);
console.log("Append 3: ", list)

list.prepend(-1);
console.log("Prepend -1: ", list);

list.search(1);
console.log("Search 1: ", list.search(1));
list.search(2);
console.log("Search 2: ", list.search(2));
list.search(99);
console.log("Search 99: ", list.search(99));

list.deleteHead();

list.deleteTail();
