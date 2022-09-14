console.log("Decimal Number Split");

var a = 12.34;
var list = a.toString().split(".");

function decimalNumberSplit(number) {
  return number.toString().split(".");
}

console.log(decimalNumberSplit(12.34));

/*
  1. the squares of only the positive integers
  2. decimal numbers are not integers

*/
const isInteger = (num) => {
  let result = num - Math.floor(num) === 0;
  if (result) {
    return num;
  } else {
    return;
  }
};
const squareList = (arr) => {
  let positiveNumberArr = arr.filter((itm) => itm >= 0 && isInteger(itm));
  return positiveNumberArr.map((itm) => itm * itm);
};

const squaredIntegers = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);
console.log(squaredIntegers);
