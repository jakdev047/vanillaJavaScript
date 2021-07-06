const age = 19;

// Excercise 01
if (age < 10) {
  console.log("Stay home under your mom supervision");
} else if (age >= 10 && age < 15) {
  console.log("Try to gain Knowledge from outside home");
} else if (age === 15 && age > 15) {
  console.log("Prepare to cast vote");
} else if (age > 18) {
  console.log("Cast you vote");
} else {
  console.log(" you are out of range");
}

// Excercise 02
switch (true) {
  case age < 10:
    console.log("Stay home under your mom supervision");
    break;
  case age >= 10 && age < 15:
    console.log("Try to gain Knowledge from outside home");
    break;
  case age === 15 && age > 15:
    console.log("Prepare to cast vote");
    break;
  case age > 18:
    console.log("Cast you vote");
    break;
  default:
    console.log(" you are out of range");
}
