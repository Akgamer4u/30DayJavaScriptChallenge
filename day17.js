// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     addInFirst(value) {
//         let node= new Node(value);
//         if(this.isEmpty()){
//             this.head = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++;
//     }

//     addInLast(value) {
//         let node= new Node(value);
//         if(this.isEmpty()){
//             this.head = node;
//         } else {
//             let current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = node;
//         }
//         this.size++;
//     }

//     remove() {
//         if (this.isEmpty()) return null;

//         if (this.getSize() === 1) {
//             let value = this.head.value;
//             this.head = null;
//             this.size--;
//             return value;
//         }

//         let current = this.head;
//         while (current.next && current.next.next) {
//             current = current.next;
//         }

//         let value = current.next.value;
//         current.next = null;
//         this.size--;
//         return value;
//     }

//     display() {
//         let current = this.head;
//         let list = '';
//         while (current) {
//             list += current.value + ' -> ';
//             current = current.next;
//         }
//         console.log(list + 'null');
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     getSize() {
//         return this.size;
//     }
// }

// // Example usage
// let list = new LinkedList();
// list.addInLast(1);
// list.addInLast(2);
// list.addInLast(3);

// list.remove();
// list.display();
// console.log(list.getSize());

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.pop();
// stack.push(4);
// stack.push(5);

// console.log(stack.size());

// console.log(stack.peek());

// const reverseString = (str) => {
//     const stack = new Stack();
//     for (let i = 0; i < str.length; i++) {
//         stack.push(str[i]);
//     }
//     let res = '';
//     for (let i = 0; i < str.length; i++) {
//         res += stack.pop();
//     }
//     return res;
// };
// console.log(reverseString("hello"))

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}
// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.dequeue();
// queue.enqueue(4);
// queue.enqueue(5);
// console.log(queue.front());
// console.log(queue.size());

// const printerJobQueue = new Queue();
// printerJobQueue.enqueue("job 1");
// printerJobQueue.enqueue("job 2");
// printerJobQueue.enqueue("job 3");
// printerJobQueue.enqueue("job 4");
// printerJobQueue.enqueue("job 5");
// printerJobQueue.enqueue("job 6");
// while(!printerJobQueue.isEmpty()){
//     console.log("prossing",printerJobQueue.dequeue());
// }

// class TreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// class BinaryTree {
//   constructor() {
//     this.root = null;
//   }

//   isEmpty() {
//     return this.root === null;
//   }

//   insert(value) {
//     const node = new TreeNode(value);
//     if (this.isEmpty()) {
//       this.root = node;
//     } else {
//       this.insertNode(this.root, node);
//     }
//   }

//   insertNode(root, node) {
//     if (node.value < root.value) {
//       if (root.left === null) {
//         root.left = node;
//       } else {
//         this.insertNode(root.left, node);
//       }
//     } else {
//       if (root.right === null) {
//         root.right = node;
//       } else {
//         this.insertNode(root.right, node);
//       }
//     }
//   }

//   display() {
//     this.inOrderTraversal(this.root);
//   }

//   inOrderTraversal(root) {
//     if (root !== null) {
//       this.inOrderTraversal(root.left);
//       console.log(root.value);
//       this.inOrderTraversal(root.right);
//     }
//   }
// }

// const binaryTree = new BinaryTree();
// binaryTree.insert(10);
// binaryTree.insert(5);
// binaryTree.insert(20);
// binaryTree.insert(8);
// binaryTree.insert(30);

// binaryTree.display();
