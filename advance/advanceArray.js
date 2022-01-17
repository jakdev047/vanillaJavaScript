/*
    arrayFromRange(1, 5) // [1,2,3,4,5]
    includes(numbers, 4) // true
    except(numbers, [1, 2]) // [3,4,5]

    The second occurrence of 12 is removed, and we add 13 and 14 at the same index. The numbers array would now be [ 10, 11, 12, 13, 14, 15 ].

    copyMachine([true, false, true], 2) should return [[true, false, true], [true, false, true]]

    filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3) should return []

    The function countOnline should return 1 when the object { Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } } is passed to it

    largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001]

    confirmEnding("Abstraction", "action") should return true.

    Truncate a String

    findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.

    Slice and Splice
    frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].

    getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

*/

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

/*

  filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3) should return []

*/

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    let arrItem = arr[i];
    let isElement = arrItem.includes(elem);
    if (!isElement) {
      newArr.push(arrItem);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
    ],
    3
  )
);

/*
  The function countOnline should return 1 when the object { Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } } is passed to it

  The function countOnline should return 2 when the object { Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } } is passed to it

  Passed
  The function countOnline should return 0 when the object { Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } } is passed to it
*/

let users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(usersObj) {
  // Only change code below this line
  let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
    }
  }
  return result;
  // Only change code above this line
}

console.log(countOnline(users));

/*
  largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001]
*/
function largestOfFour(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    let max = element.reduce((a, b) => Math.max(a, b));
    newArray.push(max);
  }
  return newArray;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

/*
  Confirm the Ending
  Check if a string (first argument, str) ends with the given target string (second argument, target).

  This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

  confirmEnding("Abstraction", "action") should return true.
*/
const str = "substr";
console.log(str.substr(1, 2)); // (1, 2): ub
console.log(str.substr(-3)); // (-3): str

/* 
  Truncate a String

  truncateString("A-tisket a-tasket A green and yellow basket", 8) should return the string A-tisket...

*/

function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

console.log(truncateString("A-tisket a-tasket A green", 8));

/*
  findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.

  findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
*/
function findElement(arr, func) {
  let num = 0;
  for (let i = 1; i <= arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

/*
  Slice and Splice
  You are given two arrays and an index.
  Copy each element of the first array into the second array, in order.

  Begin inserting elements at index n of the second array.

  Return the resulting array. The input arrays should remain the same after the function runs.

  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].

*/

function frankenSplice(arr1, arr2, n) {
  let newArr2 = [...arr2];

  let arrModify2 = newArr2.splice(n);

  let newArray = [...newArr2, ...arr1, ...arrModify2];

  return newArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 2));

/*
  getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
*/
function getIndexToIns(arr, num) {
  if (arr.length > 0) {
    let getIndex = 0;
    let newSortedArr = arr.sort((a, b) => {
      return a - b;
    });

    for (let i = 0; i < newSortedArr.length; i++) {
      if (newSortedArr[i] >= num) {
        getIndex = i;
        break;
      } else {
        getIndex = newSortedArr.length;
      }
    }
    return getIndex;
  } else {
    return 0;
  }
}

console.log(getIndexToIns([2, 5, 10], 15));

/*
  ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

  The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

  Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/

function mutation(arr) {
  let a = arr[0].toLowerCase().split("");
  let b = arr[1].toLowerCase().split("");

  let isFalse = [];

  for (let i = 0; i < b.length; i++) {
    isFalse.push(a.findIndex((item) => item === b[i]));
  }

  let isMatch = isFalse.every((item) => item >= 0);

  if (isMatch) {
    return true;
  } else {
    return false;
  }
}

console.log(mutation(["floor", "for"]));

/*
  chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]
*/

function chunkArrayInGroups(arr, size) {
  let newArray = [...arr];
  let a = newArray.splice(0, size);

  for (let item of arr) {
    console.log(item);
  }

  console.log(a);
  console.log(newArray);
  console.log(arr);
  return arr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

const data = [
  {
    employmentTypeName: "Permanent",
    employeeCount: 8,
  },
  {
    employmentTypeName: "Probation",
    employeeCount: 2,
  },
];

const totalEmployees = data?.reduce(
  (acc, initialValue) => acc + initialValue?.employeeCount,
  0
);

const modifyData = data?.map((item) => {
  return {
    ...item,
    percentage: (item?.employeeCount * 100) / totalEmployees,
  };
});

const leaveBalanceHistoryList = [
  {
    leaveBalanceId: 4546,
    leaveTypeId: 2,
    leaveTypeCode: "",
    leaveType: "Casual Leave",
    remainingDays: 986,
    leaveTakenDays: 14,
    balanceDays: 1000,
  },
  {
    leaveBalanceId: 4547,
    leaveTypeId: 4,
    leaveTypeCode: "SL",
    leaveType: "Sick Leave",
    remainingDays: 4,
    leaveTakenDays: 10,
    balanceDays: 14,
  },
  {
    leaveBalanceId: 4548,
    leaveTypeId: 5,
    leaveTypeCode: "LWP",
    leaveType: "Leave without Pay",
    remainingDays: 0,
    leaveTakenDays: 0,
    balanceDays: 0,
  },
  {
    leaveBalanceId: 4549,
    leaveTypeId: 6,
    leaveTypeCode: "SUS",
    leaveType: "Suspension",
    remainingDays: 0,
    leaveTakenDays: 0,
    balanceDays: 0,
  },
];

const modifyLeaveBalanceHistoryList = leaveBalanceHistoryList?.map((item) => {
  return {
    ...item,
    leaveTakenStatistics: [item?.leaveTakenDays, item?.balanceDays],
  };
});

const finalLeaveBalanceHistoryList = modifyLeaveBalanceHistoryList?.map(
  (item) => item?.leaveTakenStatistics
);

console.log(finalLeaveBalanceHistoryList);
