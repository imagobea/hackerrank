# Delete Duplicate Node Values (from a sorted linked list)

## Problem

### Description

You are given the pointer to the head node of a sorted linked list, where the data in the nodes is in ascending order. Delete nodes and return a sorted list with each distinct value in the original list. The given head pointer may be null indicating that the list is empty.

### Task

Complete the `removeDuplicates` function.

**Parameters**

- SinglyLinkedListNode pointer head: a reference to the head of the list

**Returns**

- SinglyLinkedListNode pointer: a reference to the head of the revised list

### Samples input/output

```
1   # The number of test cases (t), 1
5   # The number of nodes in t1
1   # the node data values
2
2
3
4
```
```
1 2 3 4 
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
 * Complete the 'removeDuplicates' function below.
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
function removeDuplicates(head) {
    let currentNode = head;
    while (currentNode !== null) {
        if (currentNode.next && currentNode.data === currentNode.next.data) {
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        }
    }

    return head;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const llistCount = parseInt(readLine(), 10);

        let llist = new SinglyLinkedList();

        for (let i = 0; i < llistCount; i++) {
            const llistItem = parseInt(readLine(), 10);
            llist.insertNode(llistItem);
        }

        let llist1 = removeDuplicates(llist.head);

        printSinglyLinkedList(llist1, " ", ws)
        ws.write("\n");
    }

    ws.end();
}
```

## Thougths

Time Complexity:
O(n)

[Editorial](https://www.hackerrank.com/challenges/delete-duplicate-value-nodes-from-a-sorted-linked-list/editorial)

Since single linked lists always "look forward" (they lack a link to the previous node), the best approach is to compare the next node data against the current. If values are the same, the next node can be skipped. Thus, one pointer is enough.
