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
    .
    sum(n-2) Execution context
    sum(n-1) Execution context
    sum(n) Execution context

*/

/*
      [5]   => [].push(5)  =>  [].push(n)
      [5,4]   => [5].push(4) =>  [n+1].push(n)
      [5,4,3]    => [5,4].push(3) =>  [n+1].push(n)
      [5,4,3,2]    => [5,4,3].push(2) =>  [n+1].push(n)
      [5,4,3,2,1]    => [5,4,3,2].push(1) =>  [n+1].push(n)

*/

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

console.log(countdown(5)); // [3,4,3,2,1]

/*
  Use Recursion to Create a Range of Numbers

  [].push(6)  => [].push(n)
  [6,7].push(7)  => [].push(n + 1)
  [6,7,8].push(8)  => [].push(n+1)
  
*/
function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  } else {
    // const countArray = countdown(n - 1);
    const countArray = rangeOfNumbers(startNum, endNum - 1);
    console.log(countArray);
    countArray.push(endNum);
    return countArray;
  }
}

/*
    [6]
    [6,7]
    [6,7,8]


*/

console.log(rangeOfNumbers(6, 9));
