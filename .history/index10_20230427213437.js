class Node10 {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Linkedlist10 {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail = node;
            this.tail.next = node;
        }
        this.length++;
        return this;
    }

    remove() {
        if (!this.head) {
            return undefined;
        } else {
            let current = this.tail;
            let newTail = current;

            while (current.next) {
                this.tail = newTail;
                this.tail.next = null;
            }

            this.length--;
            return current;
        }
    }
}
console.clear();
let linkedList = new Linklist();
console.log(linkedList.insert(39));
console.log(linkedList.insert(34));

console.log(linkedList.insert([6, 8, 9]));
console.log(linkedList.insert(79));
console.log(linkedList.insert({ name: "segun" }));
console.log(linkedList.insert(9));
console.log("");
console.log(linkedList.length);
linkedList.remove();
console.log("");
console.log(linkedList.length);