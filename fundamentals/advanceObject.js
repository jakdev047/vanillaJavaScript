// factory function
function product(title, price, availability) {
  return {
    title,
    price,
    "is available": availability,
    productDesc: () => {
      return `${title} - ${price}`;
    },
  };
}

const productOne = product("T-Shirt", 250, true);
productOne.productDesc(); // T-Shirt - 250

// constructor
function Clothing(title, price, availability) {
  this.title = title;
  this.price = price;
  this.availability = availability;
  this.productDesc = () => {
    return `${this.title} - ${this.price}`;
  };
}
const productTwo = new Clothing("Polo-Shirt", 350, true);
console.log(productTwo.productDesc()); // Polo-Shirt - 350

/*
    call bind apply
    
    normal function call func();
    with call() method  func.call();
    call() method 3 parameter this,arument & array of argument

    for apply func.apply(this,[agrument]);

    for bind  func.bind(this).call(undefined,"agrument")

    if this bind with function expression

*/
function sayHi(profession) {
  console.log(`Hi ${this}. You are a ${profession}`);
}

sayHi.call("Jubayer", "Frontend Developer");
sayHi.apply("Jubayer", ["Frontend Developer"]);

// Copy by value  for primitive Value

let a = 10;
let b = a;

a; // 10
b; // 10

a = 20;

a; // 20
b; // 10

// Copy by reference

let obj1 = { value: 10 };
let obj2 = obj1;

obj1; // {value: 10}
obj2; // {value: 10}

obj1.value = 15;

obj1; // {value: 15}
obj2; // {value: 15}

// pass by value for primitive
let c = 10;

function passByValue(c) {
  c = 15;
  return c;
}
console.log(passByValue(c)); // 15
c; // 10

// pass by reference
let obj3 = { value: 3 };

function passByReference(obj) {
  obj.value = 5;
  return obj;
}
passByReference(obj3); // {value: 5}
obj3; // {value: 5}

// copy object
let obj4 = Object.assign({}, obj3);
obj4; // {value: 5}

/* 
    Excercise 01

    Max of define a function that outputs max of two function

*/
function max(a, b) {
  return Math.max(a, b);
}

max(10, 15); // 15

/* 
    Excercise 02

    Show numbers in between with the types

*/
function showNumbers(num) {
  for (let i = 0; i < num; i++) {
    console.log(i);
  }
}
showNumbers(5);

/* 
    Excercise 03

    sum of all numbers up to passed limit

*/
function sum(num) {
  let result = 0;
  for (let i = 0; i <= num; i++) {
    result += i;
  }

  return result;
}
sum(5); // 15

/* 
    Excercise 04

    calculate avg

*/
function calculateAvg(arr) {
  let result = 0;
  let subNumber = arr.length;
  let avgNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  avgNumber = result / subNumber;
  if (avgNumber < 60) {
    return `Grade Number ${avgNumber} & Grade F `;
  } else if (avgNumber <= 69) {
    return `Grade Number ${avgNumber} & Grade D `;
  } else if (avgNumber <= 79) {
    return `Grade Number ${avgNumber} & Grade C `;
  } else if (avgNumber <= 89) {
    return `Grade Number ${avgNumber} & Grade B `;
  } else if (avgNumber <= 100) {
    return `Grade Number ${avgNumber} & Grade A `;
  } else {
    return `Out of Range`;
  }
}
console.log(calculateAvg([70, 65, 89, 92, 65]));

/* 
    Excercise 05

    Show properties of only value of string type

*/
const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

function showProperties(movieData) {
  for (let item in movieData) {
    if (typeof movieData[item] == "string") {
      console.log(movieData[item]);
    }
  }
}

showProperties(movie);

/*
   Excercise 06

   problem

    A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

    The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

    If both are true, then return the "value" of that property.

    If name does not correspond to any contacts then return the string No such contact.

    If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

   test case
   lookUpProfile("Kristian", "lastName") should return the string Vos

    lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]

    lookUpProfile("Harry", "likes") should return an array

    lookUpProfile("Bob", "number") should return the string No such contact

    lookUpProfile("Bob", "potato") should return the string No such contact

    lookUpProfile("Akira", "address") should return the string No such property
*/

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  let firstNameArray = [];
  for (let person of contacts) {
    firstNameArray.push(person.firstName);
  }
  for (let item of firstNameArray) {
    if (item === name) {
      for (let i = 0; i <= contacts.length; i++) {
        let element = contacts[i];
        if (element.firstName === name) {
          if (element.hasOwnProperty(prop)) {
            return element[prop];
          } else {
            return "No such property";
          }
        }
      }
    }
  }
  return "No such contact";
}

console.log(lookUpProfile("Bob", "potato"));
