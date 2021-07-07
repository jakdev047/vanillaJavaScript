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

// excercise
var count = 0;

function cc(card) {
  let result = "";
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      console.log(count);
      result = count > 0 ? `${count} Bet` : `${count} Hold`;
      break;

    case 7:
    case 8:
    case 9:
      count += 0;
      console.log(count);
      result = count > 0 ? `${count} Bet` : `${count} Hold`;
      break;

    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count += -1;
      console.log(count);
      result = count > 0 ? `${count} Bet` : `${count} Hold`;
      break;
  }

  return result;
}
cc(10); // -1 Hold
cc("J"); // -2 Hold
cc("Q"); // -3 Hold
cc("K"); // -4 Hold
cc("A"); // -5 Hold
