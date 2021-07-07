// function expression
const myFuncExpress = function myFunc() {
  console.log("Functions Expression");
};
myFuncExpress();

// function statement
function myFuncState() {
  console.log("Functions Statement");
}
myFuncState();

// Excersise 01

const bioSelf = (fullName, profession, language) => {
  return `I am ${fullName}.I am a ${profession}.I Love ${language}.`;
};
const jubayerSelf = bioSelf("Jubayer", "Frontend Developer", "JavaScript");
console.log(jubayerSelf);

// Excercise
function abTest(a, b) {
  // Only change code below this line

  if (a < 0 || b < 0) {
    return undefined;
  } else {
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }

  // Only change code above this line
}

abTest(-2, 2); // undefined
