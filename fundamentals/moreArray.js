/* 
    Create an Array
    Access an Array item using the index position
    Loop over an Array
    Add an item to the end of an Array
    Remove an item from the end of an Array
    Remove an item from the beginning of an Array
    Add an item to the beginning of an Array
    Find the index of an item in the Array
    Remove an item by index position ( splice(positionIndex,countRemoveItem))
    Remove items from an index position
    Copy an Array => slice()

    The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.

    at(index)

    copyWithin(target, start, end)

    entries();

    The find() method returns the value of the first element in the provided array that satisfies the provided testing function.

    The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

    The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

    flatMap((currentValue, index, array) => { ... } )

    The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

    The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

    The Array.isArray() method determines whether the passed value is an Array.

    The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

*/

// Create an Array
let fruits = ["Apple", "Banana"];

let fruitsLength = fruits.length; // 2

// Access an Array item using the index position
let first = fruits[0]; // Apple
let last = fruits[fruits.length - 1]; // Banana

// Loop over an Array
fruits.forEach(function (item, index, array) {
  console.log(item, index); // Apple 0, Banana 1
});

// Add an item to the end of an Array
fruits.push("Orange"); // ["Apple", "Banana", "Orange"]

// Remove an item from the end of an Array
fruits.pop(); // ["Apple", "Banana"]

// Remove an item from the beginning of an Array
fruits.shift(); // ["Banana"]

// Add an item to the beginning of an Array
fruits.unshift("Strawberry"); // ["Strawberry", "Banana"]

// Find the index of an item in the Array
fruits.push("Mango"); // ["Strawberry", "Banana", "Mango"]
let positionOfBanana = fruits.indexOf("Banana"); // 1

// Remove an item by index position
let removedItem = fruits.splice(positionOfBanana, 1); // ["Strawberry", "Mango"]

// Remove items from an index position
let vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"];
let positionIndex = 1;
let number = 2;
let removedItems = vegetables.splice(positionIndex, number); // ["Turnip", "Radish"]
vegetables; // ["Cabbage", "Carrot"]

// Copy an Array
let shallowCopy = fruits.slice(); // ["Strawberry", "Mango"]

console.log({ fruits });
console.log({ vegetables });
console.log({ shallowCopy });

// Array.from(), Set & Map
console.log(Array.from("foo")); // ["f", "o", "o"]
console.log(Array.from([1, 2, 3], (x) => x + x)); // [2, 4, 6]

const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set); // [ "foo", "bar", "baz" ]

const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map); // [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values()); // ['a', 'b'];

Array.from(mapper.keys()); // ['1', '2']

const range = (start, stop, step) => {
  return Array.from(
    { length: (stop - start) / step + 1 }, // 4 - 0 / 1 + 1 = 4/1 + 1 = 4 + 1 = 5
    (_, i) => start + i * step
  );
};

console.log(range(0, 4, 1)); // [0, 1, 2, 3, 4]

// Generate the alphabet using Array.from making use of it being ordered as a sequence
range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) =>
  String.fromCharCode(x)
);
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// at(index)
const array1 = [5, 12, 8, 130, 44];
let index = 2;
// console.log(array1.at(index)); // 8

// copyWithin(target, start, end)
console.log(array1.copyWithin(0, 3, 4)); // [130, 12, 8, 130, 44];

// entries();
const iterator1 = array1.entries();
console.log(iterator1.next()); // {value: [0,130], done: false }
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next()); // {value: undefined, done: true }

// The find()
const found = array1.find((element) => element > 10);
console.log(found); // 130

// findIndex()
const isLargeNumber = (element) => element === 8;
console.log(array1.findIndex(isLargeNumber)); // indexNumber: 2

// The flat()
const arr2 = [0, 1, 2, [[[3, 4]]]];
// console.log(arr2.flat(2));
console.log(arr2.flat(Infinity)); // [0, 1, 2, 3,4]

// flatMap()
const arr3 = arr2.flat(Infinity).flatMap((item) => [item * 2]);
console.log(arr3); // [0,2,4,6,8]

// includes()
const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat")); // true

// indexOf(searchElement,fromIndex)
const beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.indexOf("bison", 2)); // 4

// isArray(array)
Array.isArray([1, 2, 3]); // true

// Array.of()
console.log(Array.of(7)); // [7]

// reduceRight()
const array4 = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));

console.log(array4); //  [4, 5, 2, 3, 0, 1]
