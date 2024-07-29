
//Activity 1: Linked List

//Task 1: Implement a Node class to repersent an element in a linked list with properties value and next.

class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }

  const firstNode = new Node(10);
  const secondNode = new Node(20);
  firstNode.next = secondNode;
  
  console.log(firstNode.value);
  console.log(firstNode.next.value);
  

//Task 2: Implement a LinkedList class with method to add a node to the end , remove a node from end and display all nodes.

class Node1 {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
}
  
class LinkedList {
    constructor() {
      this.head = null; // Start with an empty list
    }  
    
    append(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode; // If the list is empty, set the new node as the head
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next; // Traverse to the end of the list
        }
        current.next = newNode; // Add the new node to the end
      }
    }
  
    removeFromEnd() {
      if (this.head === null) {
        return; // List is empty, nothing to remove
      }
      if (this.head.next === null) {
        this.head = null; // List has only one node, so remove it
      } else {
        let current = this.head;
        while (current.next.next !== null) {
          current = current.next; // Traverse to the second-to-last node
        }
        current.next = null; // Remove the last node
      }
    }
  
    display() {
      let current = this.head;
      let result = [];
      while (current !== null) {
        result.push(current.value); // Collect the value of each node
        current = current.next; // Move to the next node
      }
      console.log(result.join(' -> ')); // Display the values in a readable format
    }
}
  
const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.display(); 
  
  list.removeFromEnd();
  list.display(); 
  
  list.removeFromEnd();
  list.removeFromEnd();
  list.display();
  

//Activity 2: Stack

//Task 3:Implement a Stack class  with push, pop and peek.

class Stack {
    constructor() {
      this.items = []; // Use an array to store stack items
    }
  
    push(item) {
      this.items.push(item);
    }

    pop() {
      if (this.isEmpty()) {
        throw new Error('Stack is empty');
      }
      return this.items.pop();
    }
  t
    peek() {
      if (this.isEmpty()) {
        throw new Error('Stack is empty');
      }
      return this.items[this.items.length - 1];
    }
  

    isEmpty() {
      return this.items.length === 0;
    }

    size() {
      return this.items.length;
    }
 
    clear() {
      this.items = [];
    }
}
  

  const stack = new Stack();
  
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log(stack.peek());
  console.log(stack.pop());   
  console.log(stack.peek());  
  console.log(stack.size()); 
  
  stack.clear();
  console.log(stack.isEmpty()); 
  

//Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off. 

function reverseString(str) {
    const stack = new Stack();
  
    // Push each character of the string onto the stack
    for (const char of str) {
      stack.push(char);
    }
  
    let reversedStr = '';
  
    // Pop each character from the stack to form the reversed string
    while (!stack.isEmpty()) {
      reversedStr += stack.pop();
    }
  
    return reversedStr;
  }
  
  // Example usage:
  const originalString = "Abhinav";
  const reversedString = reverseString(originalString);
  
  console.log(reversedString); 
  

//Activity 3: Queue

//Task 5: Implement a Queue class  with enqueue, dequeue, and front.

class Queue {
    constructor() {
      this.items = []; // Use an array to store queue items
    }

    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        throw new Error('Queue is empty');
      }
      return this.items.shift(); // Remove the first item from the array
    }
 
    front() {
      if (this.isEmpty()) {
        throw new Error('Queue is empty');
      }
      return this.items[0]; // Return the first item in the array
    }
 
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    // Method to clear all items from the queue
    clear() {
      this.items = [];
    }
}
  
  const queue = new Queue();
  
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  
  console.log(queue.front()); 
  console.log(queue.dequeue()); 
  console.log(queue.front()); 
  console.log(queue.size());
  
  queue.clear();
  console.log(queue.isEmpty()); 
  

//Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue andprocessed in order.

class PrinterQueue {
    constructor() {
      this.queue = new Queue();
    }
  
    // Add a print job to the queue
    addJob(job) {
      this.queue.enqueue(job);
      console.log(`Added job: ${job}`);
    }
  
    // Process and remove the job from the front of the queue
    processJob() {
      if (this.queue.isEmpty()) {
        console.log('No jobs to process.');
        return;
      }
      const job = this.queue.dequeue();
      console.log(`Processing job: ${job}`);
    }
  
    // View the next job to be processed
    viewNextJob() {
      if (this.queue.isEmpty()) {
        console.log('No jobs in the queue.');
        return;
      }
      console.log(`Next job to process: ${this.queue.front()}`);
    }
  
    // Display the number of jobs in the queue
    displayQueueSize() {
      console.log(`Number of jobs in queue: ${this.queue.size()}`);
    }
  }
  
  // Example usage:
  const printerQueue = new PrinterQueue();
  
  printerQueue.addJob('Print Document 1');
  printerQueue.addJob('Print Document 2');
  printerQueue.addJob('Print Document 3');
  
  printerQueue.viewNextJob();
  
  printerQueue.processJob();  
  printerQueue.processJob();   
  
  printerQueue.displayQueueSize();
  
  printerQueue.processJob();  
  printerQueue.processJob();
  
  printerQueue.viewNextJob();
  

//Activity 4: Binary Tree

//Task 7: Implement a TreeNode class to repersent a binary tree with properties value, left, right. 

class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value; // The value of the node
      this.left = left;   // Reference to the left child node
      this.right = right; // Reference to the right child node
    }
  }
  
  // Example usage:
  const node3 = new TreeNode(3);
  const node4 = new TreeNode(4);
  const node2 = new TreeNode(2, node3, node4);
  const root = new TreeNode(1, node2);
  
  console.log(root.value);   
  console.log(root.left.value);  
  console.log(root.left.left.value); 
  console.log(root.left.right.value); 
  
//Task 8: Implement a BinaryTree class with method for inserting values and performing in-order traversal to display nodes.

class TreeNode1 {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      if (this.root === null) {
        this.root = new TreeNode(value);
      } else {
        this._insertRec(this.root, value);
      }
    }
  
    _insertRec(node, value) {
      if (value < node.value) {
        if (node.left === null) {
          node.left = new TreeNode(value);
        } else {
          this._insertRec(node.left, value);
        }
      } else {
        if (node.right === null) {
          node.right = new TreeNode(value);
        } else {
          this._insertRec(node.right, value);
        }
      }
    }
  
    inOrderTraversal() {
      const result = [];
      this._inOrderRec(this.root, result);
      console.log(result.join(' -> '));
    }
  
    _inOrderRec(node, result) {
      if (node !== null) {
        this._inOrderRec(node.left, result); 
        result.push(node.value);             
        this._inOrderRec(node.right, result); 
      }
    }
}
  
  // Example usage:
  const binaryTree = new BinaryTree();
  
  binaryTree.insert(10);
  binaryTree.insert(5);
  binaryTree.insert(15);
  binaryTree.insert(2);
  binaryTree.insert(7);
  binaryTree.insert(12);
  binaryTree.insert(17);
  
  binaryTree.inOrderTraversal();
  