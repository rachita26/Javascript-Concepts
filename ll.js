/* Kth element reverse in a LinkedList 
   1->2->3->4->5->6 if k=3
   Ans:3-2-1-6-5-4 */

// fixme: runs into infinite loop

class Node {
  constructor(x) {
    this.element = x;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  getHead() {
    return this.head;
  }

  add(x) {
    var node = new Node(x);
    var curr;
    if (this.head === null) {
      this.head = node;
    } else {
      curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
  }

  print() {
    var curr = this.head;
    while (curr) {
      console.log(curr.element);
      curr = curr.next;
    }
  }

  reverse(head, k) {
    if (head == null) return null;
    var curr = head; //1
    var prev = null;
    var next = null;
    let i = 0;
    console.log(next, curr, prev);
    while (i < k && curr) {
      next = curr.next; //2  //3 //4
      curr.next = prev; //1->null //2->1 //3-> 2
      prev = curr; //1 //2 //3
      curr = next; //2 //3 //4
      i += 1; //1 //2 //3
      /* console.log(next,curr, prev) */
    }

    if (next != null) {
      head.next = this.reverse(next, k); //4, 3
    }
    //   console.log(prev)
    return prev;
  }
}

var linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
linkedList.add(6);
/* linkedList.print(); */
linkedList.head = linkedList.reverse(linkedList.getHead(), 3);
// 1, 3
linkedList.print();
