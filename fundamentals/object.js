/*
  static object
  dot notaion
  Bracket notaion
  Delete Properties from a JavaScript Object
  Testing Objects for Properties
*/

// static object
const person = {
  fullName: "Hasan",
  age: 21,
  address: "Dhaka",
  job: "Job Holder",
  welcomeMsg: function () {
    console.log("Hello There");
  },
};

// dot notaion
person.fullName; // "Hasan"
person.welcomeMsg(); // Hello There

// Bracket notaion
person["address"]; // "Dhaka"

// Exercise 01
const myBio = {
  fullName: "Jubayer",
  profession: "Frontend Developer",
  language: "JavaScript",
};
const jubayerBio = `I am ${myBio.fullName}.I am a ${myBio.profession}.I Love ${myBio.language}.`;
// I am Jubayer.I am a Frontend Developer.I Love JavaScript.

// Exercise 02
const someObj = {};

someObj._name = "Hedwig"; // valid
someObj.age = 6; // valid
someObj["porp"] = "White"; // valid
//someObj.123 = true; // invalid

// Exercise 03
const movies = [
  { id: 1, movieName: "Movie One", rating: 4, category: "Category One" },
  { id: 1, movieName: "Movie Two", rating: 4, category: "Category Two" },
  { id: 1, movieName: "Movie Three", rating: 4, category: "Category Three" },
  { id: 1, movieName: "Movie Four", rating: 4, category: "Category Four" },
  { id: 1, movieName: "Movie Five", rating: 4, category: "Category Five" },
  { id: 1, movieName: "Movie Six", rating: 4, category: "Category Six" },
  { id: 1, movieName: "Movie Seven", rating: 4, category: "Category Seven" },
  { id: 1, movieName: "Movie Eight", rating: 4, category: "Category Eight" },
  { id: 1, movieName: "Movie Nine", rating: 4, category: "Category Nine" },
  { id: 1, movieName: "Movie Ten", rating: 4, category: "Category Ten" },
];

const movieOne = movies[0];

console.log(
  `${movieOne.movieName} got ${movieOne.rating} rating & under ${movieOne.category} category.`
);

// Delete Properties from a JavaScript Object
const ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  bark: "bow-wow",
};

delete ourDog.bark; // {name: "Camper",legs: 4,tails: 1}

/* 
  Testing Objects for Properties

  Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

*/

ourDog.hasOwnProperty("bark"); // false

// Exercise 04
/*


1. Your function must always return the entire record collection object.


2. If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.


3. If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it. 

4. If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.

5. If value is an empty string, delete the given prop property from the album. done
Note: A copy of the recordCollection object is used for the tests.


*/

const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (records[id].hasOwnProperty("tracks")) {
    if (prop === "tracks") {
      if (value) {
        records[id]["tracks"].push(value);
      } else {
        delete records[id]["tracks"];
      }
    } else {
      value ? (records[id][prop] = value) : delete records[id][prop];
    }
  } else {
    if (prop === "tracks") {
      if (value) {
        records[id]["tracks"] = [];
        records[id]["tracks"].push(value);
      }
    } else {
      value ? (records[id][prop] = value) : delete records[id][prop];
    }
  }

  return records;
}

console.log(updateRecords(recordCollection, 2548, "tracks", ""));
