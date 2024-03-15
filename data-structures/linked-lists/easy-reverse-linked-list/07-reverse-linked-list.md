# Reverse a linked list

## Problem

### Description

Given the pointer to the head node of a linked list, change the next pointers of the nodes so that their order is reversed. The head pointer given may be null meaning that the initial list is empty.

### Task

Complete the `reverse` function.

**Parameters**

- SinglyLinkedListNode pointer head: a reference to the head of a list

**Returns**

- SinglyLinkedListNode pointer: a reference to the head of the reversed list

### Samples input/output

```
1   // t, number of test cases
5   // n, the number of elements in the linked list
1   // Each of the next lines contains an integer, the `data` values
2
3
4
5
```
```
5 4 3 2 1 
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
 * Complete the 'reverse' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
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
function reverse(head) {
    if (head === null) return;

    let current = head;
    let next = null;
    let previous = null;
    while (current) {
        next = current.next;     // Save the next node
        current.next = previous; // Reverse the link
        previous = current;      // Move the prev pointer one step forward
        current = next;          // Move the current pointer one step forward
    }

    // The `previous` pointer is now pointing to the new head
    return previous;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const tests = parseInt(readLine(), 10);

    for (let testsItr = 0; testsItr < tests; testsItr++) {
        const llistCount = parseInt(readLine(), 10);

        let llist = new SinglyLinkedList();

        for (let i = 0; i < llistCount; i++) {
            const llistItem = parseInt(readLine(), 10);
            llist.insertNode(llistItem);
        }

        let llist1 = reverse(llist.head);

        printSinglyLinkedList(llist1, " ", ws)
        ws.write("\n");
    }

    ws.end();
}
```

## Thougths

3 pointers.
