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
8   # The number of elements in the linked list
20  # the node data values in order
6
2
19
7
4
15
9
3   # The position of the node to delete
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

    // If the head needs to be deleted
    if (position === 0) {
        const newHead = head.next;
        head.next = null; // Disconnect the old head from the list
        return newHead;
    }

    // Traverse the list to find the node just before the position to be deleted
    let currentNode = head;
    for (let i = 0; i < position - 1; i++) {
        if (currentNode.next === null) {
            throw new Error("Position out of bounds"); // Invalid position
        }
        currentNode = currentNode.next;
    }

    // currentNode is now the node just before the one to be deleted
    const nodeToDelete = currentNode.next;
    if (nodeToDelete !== null) {
        currentNode.next = nodeToDelete.next; // Bypass the node to be deleted
        nodeToDelete.next = null; // Disconnect the deleted node from the list
    } else {
        throw new Error("Position out of bounds"); // Invalid position
    }

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

Time Complexity:
O(n)

[Editorial](https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/editorial)
