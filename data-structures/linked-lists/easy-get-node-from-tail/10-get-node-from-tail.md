# Get Node Value (from tail)

## Problem

### Description

Given a pointer to the head of a linked list and a specific position, determine the data value at that position. Count backwards from the tail node. The tail is at postion 0, its parent is at 1 and so on.

### Task

Complete the `getNode` function.

**Parameters**

- SinglyLinkedListNode pointer head: refers to the head of the list
- int positionFromTail: the item to retrieve

**Returns**

- int: the value at the desired position

### Samples input/output

```
2   # The number of test cases
1   # The number of nodes in the first list
1   # the node data values
0   # the position from the tail to retrieve the value of
3   # The number of nodes in the second list
3   # the node data values
2
1
2   # the position from the tail..
```
```
1
3
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
 * Complete the 'getNode' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER positionFromTail
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
function getNode(llist, positionFromTail) {
    if (llist === null) return;

    let llistData = []; // not optimal
    while (llist) {
        llistData.push(llist.data);
        llist = llist.next;
    }
    const idx = llistData.length - (positionFromTail + 1);
    if (idx < 0) return;

    return llistData[idx]; 
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

        const position = parseInt(readLine(), 10);

        let result = getNode(llist.head, position);

        ws.write(result + "\n");
    }

    ws.end();
}
```

## Thougths

Solution above assumes that "space" is not an issue, hence the additional structure that stores all node datas. Editorial in HackerRank suggests to traverse the list twice: first to calculate the actual length, second to discover the required value (`positionFromHead` equals `length - position - 1`).
