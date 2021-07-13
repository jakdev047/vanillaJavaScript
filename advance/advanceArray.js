/*
    Exercise 01

    must result a array including all elements in the defined range

*/
function arrayFromRange(min, max) {
  let newArray = [];

  for (let i = min; i <= max; i++) {
    newArray.push(i);
  }

  return newArray;
}
const numbers = arrayFromRange(1, 5);

console.log(numbers); //  [1,2,3,4,5]

/*
    Exercise 02

    custom includes methods that is defined by you

    result true or false based on searchElement

*/

function includes(array, searchElement) {
  return array.includes(searchElement);
}

console.log(includes(numbers, 4)); // true

/*
    Exercise 03

    Exclude the numbers you passed to the function  from numbers array

*/

numbers;

function except(array, excluded) {
  if (Array.isArray(array) && Array.isArray(excluded)) {
    return array.filter((item) => !excluded.includes(item));
  } else {
    return "Invalid Data!!!";
  }
}

const output = except(numbers, [1, 2]);

console.log(output); // [3,4,5]

/*
    Exercise 04

    count the occurrence of numbers 

    At first use procedural way
    Then use reduce method

    result will be number of occurrence .Example case: result will be 2  

*/

const numberList = [1, 2, 3, 1];

function countOccurrences(array, searchElement) {
  if (Array.isArray(array)) {
    let maxArray = [];
    for (let i = 0; i <= array.length; i++) {
      if (array[i] === searchElement) {
        maxArray.push(array[i]);
        return maxArray;
      }
    }
  } else {
    return "Invalid Data!!!";
  }
}

const count = countOccurrences(numberList, 1);

console.log(count);

/*
  The second occurrence of 12 is removed, and we add 13 and 14 at the same index. The numbers array would now be [ 10, 11, 12, 13, 14, 15 ].
*/
const numberArray = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numberArray.splice(startIndex, amountToDelete, 13, 14);
console.log(numberArray);

/*
  copyMachine([true, false, true], 2) should return [[true, false, true], [true, false, true]]
*/
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine(["it works"], 2));
