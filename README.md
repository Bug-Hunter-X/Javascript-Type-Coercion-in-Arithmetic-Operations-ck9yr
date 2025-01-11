# Javascript Type Coercion Bug

This repository demonstrates a common error in JavaScript related to type coercion during arithmetic operations using the + operator. When adding numbers and strings, JavaScript's loose typing can lead to unexpected results.

## Bug Description

The `+` operator in JavaScript performs string concatenation if either operand is a string. This can lead to unexpected behavior when working with mixed numeric and string types. The bug is demonstrated in the `bug.js` file. 

## Solution

To avoid this issue, ensure that you are performing arithmetic operations on numbers only.  Explicit type conversion using `parseInt()` or `parseFloat()` can be used to convert strings to numbers before performing arithmetic operations as shown in `bugSolution.js`

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in a browser's console or a Node.js environment.
3. Run the code to observe the unexpected behavior in `bug.js` and the corrected behavior in `bugSolution.js`