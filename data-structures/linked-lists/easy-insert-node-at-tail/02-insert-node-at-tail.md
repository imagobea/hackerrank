# Insert a node at the tail of a linked list

## Problem

### Description

You are given the pointer to the head node of a linked list and an integer to add to the list. Create a new node with the given integer. Insert this node at the tail of the linked list and return the head node of the linked list formed after inserting this new node. The given head pointer may be null, meaning that the initial list is empty.

### Task

Complete the `insertNodeAtTail` function.

**Parameters**

- SinglyLinkedListNode pointer head: a reference to the head of a list
- int data: the data value for the node to insert

**Returns**

- SinglyLinkedListNode pointer: reference to the head of the modified linked list

### Samples input/output

```
5       # The number of elements in the linked list
141     # the value that needs to be inserted at tail
302
164
530
474
```
```
141
302
164
530
474
```

## Solution

```js
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
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
    }

};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

// Complete the insertNodeAtTail function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
    const newNode = new SinglyLinkedListNode(data);

    if (head === null) {
        // If the list is empty, make `newNode` the head
        head = newNode;
    } else {
        // Traverse the list to find the last node
        let currentNode = head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        // Add `newNode` to the end of the list
        currentNode.next = newNode;
    }

    return head;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const llistCount = parseInt(readLine(), 10);

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
        const llistItem = parseInt(readLine(), 10);
    	const llist_head = insertNodeAtTail(llist.head, llistItem);
      	llist.head = llist_head;
    }

    printSinglyLinkedList(llist.head, '\n', ws);
    ws.write('\n');

    ws.end();
}
```

## Thougths

Time Complexity:
O(n), `n` Number of elements in the linked list

[Editorial](https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/editorial)
