// about bio
const bioArray = ["Jubayer", "Frontend Developer", "JavaScript"];
const mySelf = `I am ${bioArray[0]}.I am a ${bioArray[1]}.I Love ${bioArray[2]}.`;

/* 
    array method
*/

// The push() method adds a new element to an array (at the end).

const colors = ["red", "green", "blue", "yellow"];
colors.push("orange"); // ["red", "green", "blue", "yellow","orange"]

// The pop() method removes the last element from an array.
colors.pop("orange"); // ["red", "green", "blue", "yellow"]

// The shift() method removes the first array element.
colors.shift(); // ["green", "blue", "yellow"]

// The unshift() method adds a new element to an array (at the beginning).
colors.unshift("red"); // ["red","green", "blue", "yellow"]

// The indexOf() method to get index of array element, returns -1 if not found.
const greenColor = colors.indexOf("green"); // 1
const orangeColor = colors.indexOf("orange"); // -1

/*
    The splice() method changes the contents of an array by removing or replacing existing elements  and/or adding new elements in place. 

    arr.splice(<index>, <steps>, [elements ...]);
*/

const months = ["Jan", "March", "April", "June"];

// inserts at index 1
months.splice(1, 0, "Feb");
console.log(months); // ["Jan", "Feb", "March", "April", "June"]

// replaces 1 element at index 4
months.splice(4, 1, "May");
console.log(months); //["Jan", "Feb", "March", "April", "May"]

// removes 1 item at index 1
months.splice(1, 1); // ["Jan", "March", "April", "May"]

/*
    
    The slice() method extracts a section of a string and returns 
    it as a new string, without modifying the original string.

    arr.splice(startIndex, beforeIndIndex);
*/

const animals = ["ant", "bison", "camel", "duck", "elephant"];

const copyAnimals = animals; // copy by reference. Its reffer same memory & same object
const newAnimals = animals.slice(2); // copy by value. Its reffer different memory & object

animals.slice(2); // ["camel", "duck", "elephant"]

animals.slice(2, 4); // ["camel", "duck"]

animals.slice(1, 5); // ["bison", "camel", "duck", "elephant"]

animals.slice(-2); // ["duck", "elephant"]

animals.slice(2, -1); // ["camel", "duck"]

/* 
    The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
*/
const numbers = [20, 1, 2, 3, 4, 5];
const totalReduce = 50;

const resultDiffReduce = numbers.reduce(
  (previousValue, currentValue, currentIndex, arr) => {
    return previousValue - currentValue;
  }
); // 20 -1 -2 -3 -4 -5 = 5

const resultRemainingReduce = numbers.reduce(
  (previousValue, currentValue, currentIndex, arr) =>
    previousValue - currentValue,
  totalReduce
); // 50 - 20 -1 -2 -3 -4 -5 = 15

// remove duplicate from an array
const mainReduceArray = [1, 1, 3, 4, 4, 3, 5];
const uniqueReduceArray = mainReduceArray.reduce(
  (previousValue, currentValue) => {
    if (previousValue.indexOf(currentValue) === -1) {
      previousValue.push(currentValue);
    }

    return previousValue;
  },
  []
); // [1,3,4,5]

/* 
    1st step
       [],1 => [].indexOf(1) === -1 {
           [].push(1);
       }
       [1]
    
    2nd step
       [1],1 => [1].indexOf(1) === -1 {
           // not executed because 1 number exist in array
       }
       [1]

*/

console.log({ resultDiffReduce, resultRemainingReduce, uniqueReduceArray });
