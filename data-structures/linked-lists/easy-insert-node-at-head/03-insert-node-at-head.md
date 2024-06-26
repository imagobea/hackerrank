# Insert a node at the head of a linked list

## Problem

### Description

Given a pointer to the head of a linked list, insert a new node before the head. The `next` value in the new node should point to the given head and the `data` value should be replaced with the given value. Return a reference to the new head of the list. The head pointer given may be null meaning that the initial list is empty.

### Task

Complete the `insertNodeAtHead` function.

**Parameters**

- SinglyLinkedListNode llist: a reference to the head of a list
- data: the value to insert in the data field of the new node

**Returns**

- SinglyLinkedListNode pointer: reference to the head of the modified linked list

### Samples input/output

```
5       # The number of elements in the linked list
383     # the value that needs to be inserted at head
484
392
975
321
```
```
321
975
392
484
383
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
        this.tail = null;
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

// Complete the insertNodeAtHead function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtHead(head, data) {
    const newNode = new SinglyLinkedListNode(data);

    // Set the next pointer of the new node to the current head
    newNode.next = head;        

    // The new node is now the head of the list
    return newNode;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const llistCount = parseInt(readLine(), 10);

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
        const llistItem = parseInt(readLine(), 10);
    	const llist_head = insertNodeAtHead(llist.head, llistItem);
      	llist.head = llist_head;
    }

    printSinglyLinkedList(llist.head, '\n', ws);
    ws.write('\n');

    ws.end();
}
```

## Thougths

Time Complexity:

[Editorial](https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/editorial)
