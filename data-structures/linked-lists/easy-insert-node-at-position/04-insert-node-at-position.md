# Insert a node at a specific position in a linked list

## Problem

### Description

Given the pointer to the head node of a linked list and an integer to insert at a certain position, create a new node with the given integer as its `data` attribute, insert this node at the desired position and return the head node.

A position of 0 indicates head, a position of 1 indicates one node away from the head and so on. The head pointer given may be null meaning that the initial list is empty.

### Task

Complete the `insertNodeAtPosition` function.

**Parameters**

- head: a SinglyLinkedListNode pointer to the head of the list
- data: an integer value to insert as data in your new node
- position: an integer position to insert the new node, zero based indexing

**Returns**

- SinglyLinkedListNode pointer: a reference to the head of the revised list

### Samples input/output

```
3   # The number of elements in the linked list
16  # the data values for each node
13
7
1   # The data of the node that is to be inserted
2   # and the position
```
```
16 13 1 7
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

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

/*
 * Complete the 'insertNodeAtPosition' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER data
 *  3. INTEGER position
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtPosition(head, data, position) {
    const newNode = new SinglyLinkedListNode(data);

    // Insert at head
    // Implicitly handles empty list with insertion at 0
    if (position === 0) {
        newNode.next = head;
        return newNode;
    }

    // Traverse the list till finding the node where to insert the given data
    let currentNode = head;
    for (let i = 0; i < position - 1; i++) {
        // Implicitly handles empty list with position other than 0
        if (currentNode === null) {
            throw new Error("Position out of bounds");
        }
        currentNode = currentNode.next;
    }

    // Insert at position
    newNode.next = currentNode.next;
    currentNode.next = newNode;

    return head;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const llistCount = parseInt(readLine(), 10);

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
        const llistItem = parseInt(readLine(), 10);
        llist.insertNode(llistItem);
    }

    const data = parseInt(readLine(), 10);

    const position = parseInt(readLine(), 10);

    let llist_head = insertNodeAtPosition(llist.head, data, position);

    printSinglyLinkedList(llist_head, " ", ws)
    ws.write("\n");

    ws.end();
}
```

## Thougths

Time Complexity:
O(n)

[Editorial](https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/editorial)

Loops till position - 1. Doable with a single pointer.
