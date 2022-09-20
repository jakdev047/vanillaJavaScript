// how to write  generate function in js?

function* generatorFunction() {
  console.log("generator 1");
  yield 1;
  console.log("generator 2");
  yield 2;
}

console.log(generatorFunction().next());
