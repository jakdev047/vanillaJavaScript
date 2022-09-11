const s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  const newArray = [];
  let x = this.length;
  for (let i = 0; i < x; i++) {
    if (callback(this[i])) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const new_s = s.myFilter(function (item) {
  return item % 2 === 1;
});

console.log(new_s);
