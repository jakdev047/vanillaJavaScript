/*
    excercise 01

    count the truthy value

*/
const arr = [0, null, undefined, "", 2, 3];

function countTruthy(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArray.push(arr[i]);
    }
  }

  console.log(newArray);

  return newArray.length;
}

console.log(countTruthy(arr));

/*
    excercise 02

    add those numbers 

*/

function sum(arr) {
  if (Array.isArray(arr)) {
    let newArray = [];
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] && typeof arr[i] === "number") {
        newArray.push(arr[i]);
      }
    }
    for (let i = 0; i < newArray.length; i++) {
      total += newArray[i];
    }
    return {
      newArray,
      total,
    };
  } else {
    return "Invalid Data!!!";
  }
}

console.log(sum([1, 2, 3, 0, null, undefined, "hello"]));
