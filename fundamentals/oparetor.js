const num1 = 30;
const num2 = 50;

// Arithmetic Oparetor
let sum = num1 + num2; // 80
let substract = num1 - num2; // -20
let multiply = num1 * num2; // 1500
let difference = num1 / num2; // 0.6
let modulus = num1 % num2; // 30

// Assignment Oparetor
sum += num1; // 80 + 30 = 110
substract -= num1; // -20 - 30 = -50
multiply *= num1; // 1500 * 30 = 45000
difference /= num1; // 0.6 / 30 = 0.02
modulus %= num1; // 30 % 30 = 0

// increment oparetor
let x = 10;
console.log(x++); // 10 = 10 + 1; x = 10
x; // x = 11

// Comparison Operator
num1;
num1 > 10; // true
num1 >= 30; // true
num1 < 50; // true
num1 <= 10; // false
num1 == 30; // true
num1 === "30"; // false
num1 != 30; // false
num1 !== 30; // false

// Logical Operator && || !=
true && true; // true
true && false; // false
true || true; // true
true || false; // true
true != true; // false
true !== true; // false

// developer console
// console.log('%cZonayed Ahmed', 'font-size: 50px; background-color: red')

// Excercise 1
x;
const y = "a";
const p = 3;
const q = 8;

q === "b" || p >= 10; // false
!(p === "3" || p === q) && !(q != 8 && p <= q); // true

// Excercise 2
!"Hello"; // false
!""; // true
!null; // true
!0; // true
!-1; // false
!NaN; // true

// Excercise 3
const str = "";
const msg = "haha!";
const isFunny = "false";
!(str || msg) && isFunny; // false
