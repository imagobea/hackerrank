# Max element

## Problem

### Description

You have an empty sequence, and you will be given  queries. Each query is one of these three types:

```
1 x  -Push the element x into the stack.
2    -Delete the element present at the top of the stack.
3    -Print the maximum element in the stack.
```

### Task

Complete the `getMax` function.

**Parameters**

- string operations[n]: operations as strings

**Returns**

- int[]: the answers to each type 3 query

### Samples input/output

```
STDIN   Function
-----   --------
10      operations[] size n = 10
1 97    operations = ['1 97', '2', '1 20', ....]
2
1 20
2
1 26
1 20
2
3
1 91
3
```

```
26
91
```

## Solution

```js
'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'getMax' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY operations as parameter.
 */
function getMax(operations: string[]): number[] {
    const stack = [];
    let maxs: number[] = [];

    for (const query of operations) {
        // Assuming that query is never empty string
        const queryType = query.split(" ")[0];

        switch (queryType) {
            case "1":
                // Assuming there will always be a second substring
                const n = parseInt(query.split(" ")[1]);
                stack.push(n);
                break;
            case "2":
                if (stack.length) stack.pop();
                break;
            case "3":
                maxs.push(Math.max(...stack));
                break;
        }   
    }

    return maxs;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    let ops: string[] = [];

    for (let i: number = 0; i < n; i++) {
        const opsItem: string = readLine();
        ops.push(opsItem);
    }

    const res: number[] = getMax(ops);

    ws.write(res.join('\n') + '\n');

    ws.end();
}

```

## Thougths

I was right about the single loop plus the additional structures: the stack plus the maxs. However, the Editorial suggests to keep track of the max number - which I didn't do in the end, but the proposed solution passes all tests, so not too bad after all. 
