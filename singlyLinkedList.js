class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	isEmpty() {
		return this.length === 0;
	}

	push(value) {
		let newNode = {
			value: value,
			next: null,
		};

		if (this.isEmpty()) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}
}

const list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
list.push(60);
console.log(list);
console.log(list.isEmpty());
console.log(list.length);
console.log(list.head);
console.log(list.tail);
