
// Add Front
// Write a method that accepts a value and create a new node, 
// assign it to the list head, and return a pointer to the new head node.

class SLL {
    // DEFINE OUR CONSTRUCTOR
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // ADD TO FRONT
    addFront(value) {
        // STORE PARAMETER VALUE IN NEW NODE
        let newNode = new Node(value);
        // IF LIST IS EMPTY
        // CREATE NEW NODE
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // IF LIST IS NOT EMPTY
            // SET FIRST HEAD TO NEXT VALUE OF NEW NODE
            newNode.next = this.head;
            //SET VALUE OF FIRST HEAD TO NEW NODE
            this.head = newNode;
        }
        console.log("Add Front: ", newNode);
        return this.head;
    }
    // Remove Front
    // Write a method to remove the head node and 
    // return the new list head node. If the list is empty, return null.
    removeFront() {
        // IF LIST IS EMPTY
        if (!this.head) {
            return null;
        } else {
            // IF LIST HAS ONLY ONE NODE
            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
            // SET FIRST HEAD TO NEXT VALUE OF HEAD NODE
            this.head = this.head.next;
            //SET VALUE OF FIRST HEAD TO NULL
            this.head.prev = null;
            }
            // RETURN NEW HEAD NODE
            console.log("Remove Front: ", this.head);
            return this.head;
        }
    }
    // Front
    // Write a method to return the value (not the node) at the head of the list.
    // If the list is empty, return null.
    front() {
        // IF LIST IS EMPTY
        if (!this.head) {
            console.log("Front: ", null);
            return null;
        } else {
            console.log("Front: ", this.head.value);
            // RETURN VALUE OF FIRST HEAD NODE
            return this.head.value;
        }
    }
}

// ALWAYS DEFINE THE NODE CLASS
class Node {
    constructor(value, prev, next) {
        // SET VALUE OF NEW NODE
        this.value = value;
        // // SET PREVIOUS NODE IF DOUBLY LINKED
        // this.prev = prev || null;
        // SET NEXT NODE
        this.next = next || null;
    }
}

// DEFINE OUR LIST
let SLL1 = new SLL();

SLL1.addFront(18);
// => Node { data: 18, next: null }
SLL1.addFront(5);
// => Node { data: 5, next: Node { data: 18, next: null } }
SLL1.addFront(73);
// => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

SLL1.removeFront();
//  => Node { data: 5, next: Node { data: 18, next: null } }
SLL1.removeFront();
//  => Node { data: 18, next: null }

SLL1.front();
//  => 18
SLL1.removeFront();
//  => null
SLL1.front();
//  => null