# Inserting a Node Into a Sorted Doubly Linked List

## Problem

### Description

Given a reference to the head of a doubly-linked list and an integer, `data`, create a new DoublyLinkedListNode object having data value `data` and insert it at the proper location to maintain the sort.

### Task

Complete the `sortedInsert` function.

**Parameters**

- DoublyLinkedListNode head: a reference to the head of a doubly linked list
- int data: An integer denoting the value of the  field for the DoublyLinkedListNode you must insert into the list.

**Returns**

- DoublyLinkedListNode: a reference to the head of the list

### Samples input/output

```
1   # The number of test cases (t), 1
4   # The number of nodes in t1
1   # the node data values
3
4
10
5   # data = 5
```
```
1 3 4 5 10
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

const DoublyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
        this.prev = null;
    }
};

const DoublyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        let node = new DoublyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }

        this.tail = node;
    }
};

function printDoublyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

/*
 * Complete the 'sortedInsert' function below.
 *
 * The function is expected to return an INTEGER_DOUBLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_DOUBLY_LINKED_LIST llist
 *  2. INTEGER data
 */

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function sortedInsert(head, data) {
    const newNode = new DoublyLinkedListNode(data);
    
    // If the list is empty, the new node becomes the head
    if (head === null) {
        return newNode;
    }

    // If the new node needs to be inserted at the head
    if (data < head.data) {
        newNode.next = head;
        head.prev = newNode;
        return newNode;
    }

    // Traverse the list to find the insertion point
    let currentNode = head;
    while (currentNode.next !== null && currentNode.next.data < data) {
        currentNode = currentNode.next;
    }

    // Insert the new node in the correct position
    newNode.next = currentNode.next;
    if (currentNode.next !== null) {
        currentNode.next.prev = newNode;
    }
    currentNode.next = newNode;
    newNode.prev = currentNode;

    return head;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const llistCount = parseInt(readLine(), 10);

        let llist = new DoublyLinkedList();

        for (let i = 0; i < llistCount; i++) {
            const llistItem = parseInt(readLine(), 10);
            llist.insertNode(llistItem);
        }

        const data = parseInt(readLine(), 10);

        let llist1 = sortedInsert(llist.head, data);

        printDoublyLinkedList(llist1, " ", ws)
        ws.write("\n");
    }

    ws.end();
}
```

## Thougths

Time Complexity:
O(n)

[Editorial](https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list/editorial)
