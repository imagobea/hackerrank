# Compare two linked lists

## Problem

### Description

You’re given the pointer to the head nodes of two linked lists. Compare the data in the nodes of the linked lists to check if they are equal. If all data attributes are equal and the lists are the same length return 1, otherwise return 0.

### Task

Complete the `compareLists` function.

**Parameters**

- SinglyLinkedListNode llist1: a reference to the head of a list
- SinglyLinkedListNode llist2: a reference to the head of a list

**Returns**

- int: return 1 if the lists are equal, or 0 otherwise

### Samples input/output

```
Sample Input

2   # The number of test cases (t), 2
2   # The number of nodes in t1 first linked list
1   # the node data values
2
1   # the number of nodes in t1 second linked list
1   # the node data values
2   # The number of nodes in t2 first linked list
1   # the node data values
2
2   # the number of nodes in t2 second linked list
1   # the node data values
2
```
```
0
1
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

// Complete the compareLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function compareLists(llist1, llist2) {
    while (llist1 !== null && llist2 !== null) {
        if (llist1.data !== llist2.data) {
            return 0;
        }
        llist1 = llist1.next;
        llist2 = llist2.next;
    }
    // If we traversed both, lists are equal (1)
    return (llist1 === null) && (llist2 === null) ? 1 : 0;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const tests = parseInt(readLine(), 10);

    for (let testsItr = 0; testsItr < tests; testsItr++) {
        const llist1Count = parseInt(readLine(), 10);

        let llist1 = new SinglyLinkedList();

        for (let i = 0; i < llist1Count; i++) {
            const llist1Item = parseInt(readLine(), 10);
            llist1.insertNode(llist1Item);
        }
      
      	const llist2Count = parseInt(readLine(), 10);

        let llist2 = new SinglyLinkedList();

        for (let i = 0; i < llist2Count; i++) {
            const llist2Item = parseInt(readLine(), 10);
            llist2.insertNode(llist2Item);
        }

        let result = CompareLists(llist1.head, llist2.head);

        ws.write((result ? 1 : 0) + "\n");
    }

    ws.end();
}
```

## Thougths

- The empty list check at the top can be skipped
- Since we do not have to return the head, it's okay to "overwrite" input params
- Better to be explicit than not: e.g. `if (head === null)` instead of `if (head)`
