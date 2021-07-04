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
