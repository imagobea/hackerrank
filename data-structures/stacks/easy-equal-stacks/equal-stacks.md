# Equal stacks

## Problem

### Description

You have three stacks of cylinders where each cylinder has the same diameter, but they may vary in height. You can change the height of a stack by removing and discarding its topmost cylinder any number of times.

Find the maximum possible height of the stacks such that all of the stacks are exactly the same height. This means you must remove zero or more cylinders from the top of zero or more of the three stacks until they are all the same height, then return the height.

### Task

Complete the `equalStacks` function.

**Parameters**

- int h1[n1]: the first array of heights
- int h2[n2]: the second array of heights
- int h3[n3]: the third array of heights

**Returns**

- int: the height of the stacks when they are equalized

### Samples input/output

```
STDIN       Function
-----       --------
5 3 4       h1[] size n1 = 5, h2[] size n2 = 3, h3[] size n3 = 4  
3 2 1 1 1   h1 = [3, 2, 1, 1, 1]
4 3 2       h2 = [4, 3, 2]
1 1 4 1     h3 = [1, 1, 4, 1]
```
```
5
```

## Solution

```js
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'equalStacks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h1
 *  2. INTEGER_ARRAY h2
 *  3. INTEGER_ARRAY h3
 */
function equalStacks(h1, h2, h3) {
    // Reverse the arrays to simulate removing cylinders from the top
    h1.reverse();
    h2.reverse();
    h3.reverse();

    // Calculate heights for all cylinders
    let heightH1 = h1.reduce((sum, value) => sum + value, 0);
    let heightH2 = h2.reduce((sum, value) => sum + value, 0);
    let heightH3 = h3.reduce((sum, value) => sum + value, 0);

    while (heightH1 !== heightH2 || heightH2 !== heightH3) {
        const minHeight = Math.min(heightH1, heightH2, heightH3);

        while (heightH1 > minHeight) {
            heightH1 -= h1.pop();
        }

        while (heightH2 > minHeight) {
            heightH2 -= h2.pop();
        }

        while (heightH3 > minHeight) {
            heightH3 -= h3.pop();
        }
    }

    return heightH1; // or heightH2 or heightH3, as they are all equal now
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n1 = parseInt(firstMultipleInput[0], 10);

    const n2 = parseInt(firstMultipleInput[1], 10);

    const n3 = parseInt(firstMultipleInput[2], 10);

    const h1 = readLine().replace(/\s+$/g, '').split(' ').map(h1Temp => parseInt(h1Temp, 10));

    const h2 = readLine().replace(/\s+$/g, '').split(' ').map(h2Temp => parseInt(h2Temp, 10));

    const h3 = readLine().replace(/\s+$/g, '').split(' ').map(h3Temp => parseInt(h3Temp, 10));

    const result = equalStacks(h1, h2, h3);

    ws.write(result + '\n');

    ws.end();
}
```

## Thougths

- `reverse` the arrays
- create a var that stores `minHeight`
- loop through each cylinder individually, as many times as needed
