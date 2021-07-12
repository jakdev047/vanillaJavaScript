/* 
    while loop

    initialization;
    while (condition) {
        // code execution
        increment / decrement
    }
*/

// Excercise 01
let num = 1;

while (num <= 10) {
  console.log(num); // 1,3,5,7,9

  num += 2;
}

// Excercise 02
while (num <= 20) {
  if (num % 4 == 0) {
    console.log(num); // 12, 16, 20
  }
  num++;
}

/* 
    for loop

    for (initialization; condition; increment / decrement;) {
        // code execution
    }
*/

// continue
for (let i = 6; i > 0; i--) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i); // 5,3,1
}

// break
for (let i = 1; i < 6; i++) {
  if (i === 4) {
    break;
  }
  console.log(i); // 1,2,3
}

// for of loop
const colors = ["red", "green", "blue"];

for (let item of colors) {
  console.log(item); // red, green blue
}

// for in loop
const bio = {
  fullName: "Jubayer",
  profession: "Frontend Developer",
  language: "Javascript",
};

for (let item in bio) {
  console.log(item); // fullName, profession, language
}

// Excercise 05
function pattern(x) {
  let row;
  let col;
  for (row = 1; row <= x; row++) {
    let result = "";
    for (col = 1; col <= row; col++) {
      result += "$";
    }
    console.log(result);
  }
}

pattern(5);

// Excercise 06
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// excercise 07
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
      console.log(arr[i][j]); // 1,2,3
    }
  }
  // Only change code above this line
  return product; // 6
}

multiplyAll([[1], [2], [3]]);

// Excercise 08
function zeroArray(m, n) {
  let newArray = [];
  for (let i = 0; i < m; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
