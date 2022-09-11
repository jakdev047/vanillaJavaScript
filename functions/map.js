const s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  let newArray = [];
  let x = this.length;
  for (let i = 0; i < x; i++) {
    let counter = callback(this[i]);
    newArray.push(counter);
  }
  return newArray;
};

const new_s = s.myMap((item) => {
  return item * 2;
});

console.log(new_s);
