console.log("Hoisting...");

function x() {
  console.log(a); // undefined
}

x();

var a = 10;
