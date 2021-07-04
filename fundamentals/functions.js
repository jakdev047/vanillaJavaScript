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

// Excersise

const bioSelf = (fullName, profession, language) => {
  return `I am ${fullName}.I am a ${profession}.I Love ${language}.`;
};
const jubayerSelf = bioSelf("Jubayer", "Frontend Developer", "JavaScript");
console.log(jubayerSelf);
