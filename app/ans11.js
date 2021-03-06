class Node { 
    constructor(x) { 
        this.x = x; 
        this.next = null
    } 
}

class SinglyLinkedList {
    constructor() { 
        this.head = null; 
        this.length = 0; 
    }
    addLast(x) { 
        var node = new Node(x); 
        var currentNode; 
        if (this.head == null) {
            this.head = node; 
        }
        else { 
            currentNode = this.head; 
            while (currentNode.next) { 
                currentNode = currentNode.next; 
            } 
            currentNode.next = node; 
        } 
        this.length++; 
    }
    addFirst(x) {
        var node = new Node(x); 
        var currentNode; 
        currentNode = this.head; 
        node.next = this.head; 
        this.head = node; 
        this.length++;
    }
    getFirst() {
        var currentNode = this.head;
        return currentNode.x;
    }
    getLast() {
        var currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next; 
        }
        return currentNode.x;
    }
    getLength() {
        return this.length;
    }
    printList() { 
    var currentNode = this.head; 
    var string = ""; 
    while (currentNode) { 
        string += currentNode.x + " "; 
        currentNode = currentNode.next; 
    } 
    console.log(string); 
} 


}

export {SinglyLinkedList};