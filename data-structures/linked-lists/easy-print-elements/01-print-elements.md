# Print the elements of a linked list

## Problem

### Description

This is an [introduction] to practice traversing a linked list. Given a pointer to the head node of a linked list, print each node's `data` element, one per line. If the head pointer is null (indicating the list is empty), there is nothing to print.

### Task

Complete the `printLinkedList` function.

**Parameters**

- SinglyLinkedListNode head: a reference to the head of the list

**Returns**

- Void. For each node, print its `data` value on a new line.

### Samples input/output

```
2   # The number of elements in the linked list
16  # the data values for each node
13
```
```
16
13
```

## Solution

```js
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

// Complete the printLinkedList function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function printLinkedList(head) {
    let currentNode = head;
    while (currentNode !== null) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
}

function main() {
    const llistCount = parseInt(readLine(), 10);

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
        const llistItem = parseInt(readLine(), 10);
        llist.insertNode(llistItem);
    }

    printLinkedList(llist.head);
}
```

## Thougths

N/a
