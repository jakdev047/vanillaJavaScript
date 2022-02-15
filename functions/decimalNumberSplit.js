console.log("Decimal Number Split");

var a = 12.34;
var list = a.toString().split(".");

function decimalNumberSplit(number) {
  return number.toString().split(".");
}

console.log(decimalNumberSplit(12.34));
