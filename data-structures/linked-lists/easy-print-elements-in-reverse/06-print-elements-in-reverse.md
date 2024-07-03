# Print in Reverse

## Problem

### Description

Given a pointer to the head of a singly-linked list, print each `data` value from the reversed list. If the given list is empty, do not print anything.

### Task

Complete the `reversePrint` function.

**Parameters**

- SinglyLinkedListNode pointer head: a reference to the head of the list

**Returns**

- Void. For each node, print its `data` value on a new line.

### Samples input/output

```
3   # The number of test cases (t), 3
5   # The number of nodes in t1
16  # the node data values
12
4
2
5
3   # The number of nodes in t2
7   # the node data values
3
9
5   # The number of nodes in t3
5   # the node data values
1
18
3
13
```
```
5
2
4
12
16
9
3
7
13
3
18
1
5
```

## Solution

```js
'use strict';

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

/*
 * Complete the 'reversePrint' function below.
 *
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
function reversePrint(head) {
    if (head === null) return;
    reversePrint(head.next);
    console.log(head.data);
}

function main() {
    const tests = parseInt(readLine(), 10);

    for (let testsItr = 0; testsItr < tests; testsItr++) {
        const llistCount = parseInt(readLine(), 10);

        let llist = new SinglyLinkedList();

        for (let i = 0; i < llistCount; i++) {
            const llistItem = parseInt(readLine(), 10);
            llist.insertNode(llistItem);
        }

        reversePrint(llist.head);
    }
}
```

## Thougths

Time Complexity:
O(n)

[Editorial](https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-in-reverse/editorial)

Recursion.
