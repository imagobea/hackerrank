function validateNumber(n) {
    if (typeof n !== 'number') {
        throw new Error("Input must be of type number!");
    }
    if (!Number.isInteger(n)) {
        throw new Error("Input must be an integer!");
    }
}

class SinglyLinkedListNode {
    data;
    next;

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    head;
    count = 0;

    constructor(data) {
        validateNumber(data);

        this.head = new SinglyLinkedListNode(data);

        this.count++;

        this.printSinglyLinkedList();
    }

    printNodesCount() {
        console.log("*** Linked List length is %s", this.count);
    }

    printSinglyLinkedList() {
        let currentNode = this.head;
        while (currentNode !== null) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
        this.printNodesCount();
    }

    insertNodeAtHead(data) {
        validateNumber(data);

        const newNode = new SinglyLinkedListNode(data);
        newNode.next = this.head;
        this.head = newNode;

        this.count++;

        this.printSinglyLinkedList();
    }

    insertNodeAtTail(data) {
        validateNumber(data);

        const newNode = new SinglyLinkedListNode(data);

        let currentNode = this.head;

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;

        this.count++;

        this.printSinglyLinkedList();
    }

    insertNodeAtPosition(data, position) {
        validateNumber(data);

        validateNumber(position);
        if (position === 0) {
            return this.insertNodeAtHead(data);
        }

        const newNode = new SinglyLinkedListNode(data);

        let currentNode = this.head;
        for (let i = 0; i < position - 1; i++) {
            if (currentNode === null) {
                throw new Error("Given position is out of bounds!");
            }
            currentNode = currentNode.next;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;

        this.count++;

        this.printSinglyLinkedList();
    }

    // TODO Searching, Deleting
}

(function() {
    try {
        const list = new SinglyLinkedList(1);
        list.insertNodeAtTail(2);
        list.insertNodeAtHead(3);
        list.insertNodeAtPosition(10, 2);
    } catch (error) {
        console.error(error.message);
        process.exit(0);
    }
})();
