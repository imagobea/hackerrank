# Delete a node

## Problem

### Description

Delete the node at a given position in a linked list and return a reference to the head node. The head is at position 0. The list may be empty after you delete the node. In that case, return a null value.

### Task

Complete the `deleteNode` function.

**Parameters**

- SinglyLinkedListNode pointer llist: a reference to the head node in the list
- int position: the position of the node to remove

**Returns**

- SinglyLinkedListNode pointer: a reference to the head of the modified list

### Samples input/output

```
8
20
6
2
19
7
4
15
9
3
```
```
20 6 2 7 4 15 9
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
 * Complete the 'deleteNode' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER position
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
function deleteNode(head, position) {
    if (head === null) {
        throw new Error("Empty list, nothing to do");
    }

    // Removing at position zero
    if (position === 0) {
        const newHead = head.next;
        // The list may be empty after you delete the node
        return newHead;
    }

    // Removing at any other position
    let lastNode = head;
    let currentNode = head.next;
    for (let i = 1; i < position; i++) { // Acc to ChatGPT, using i < position - 1 is best..
        if (currentNode === null) {
            throw new Error("Reached end of list, position out of bounds");
        }
        lastNode = currentNode;
        currentNode = currentNode.next;
    }

    // Remove at position
    lastNode.next = currentNode.next;
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

    const position = parseInt(readLine(), 10);

    let llist1 = deleteNode(llist.head, position);

    printSinglyLinkedList(llist1, " ", ws)
    ws.write("\n");

    ws.end();
}
```

## Thougths
