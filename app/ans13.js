class Node { 
    constructor(x) { 
        this.x = x; 
        this.next = null
    } 
}

class Stack {
    constructor() { 
        this.head = null; 
        this.length = 0; 
    }
    push(x) {
        var node = new Node(x); 
        var currentNode; 
        currentNode = this.head; 
        node.next = this.head; 
        this.head = node; 
        this.length++;
    }
    pop() {
        var currentNode = this.head;
        this.head = currentNode.next;
        return currentNode.x;
    }
    top() {
        var currentNode = this.head;
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

export {Stack};