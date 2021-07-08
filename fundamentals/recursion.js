/*
    recursion function func(func());
    1 + 2 + 3 + ...... + n

    formula (n(n+1))/2

*/

let total = 0;
let n = 5;

for (let i = 0; i <= n; i++) {
  total += i;
}

console.log(total);

// f(n-1) + n = f(n)

function sum(n) {
  if (n < 0) {
    return 0;
  } else {
    return sum(n - 1) + n;
  }
}

console.log(sum(3)); // 6

/* 
    code execution

    sum(3)
        sum(2) + 3
        sum(1) + 2  + 3
        sum(0) + 1 + 2 + 3
        0 + 1 + 2 + 3

    sum(0) Execution context
    .
    .
    .s
    sum(n-2) Execution context
    sum(n-1) Execution context
    sum(n) Execution context

*/
