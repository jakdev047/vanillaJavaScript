/* 
    Problem 01

    Use Math.random() to generate a random decimal.
    Multiply that random decimal by 20.
    Use another function, Math.floor() to round the number down to its nearest whole number.
*/

console.log(Math.floor(Math.random() * 10)); // 5

/* 
    Problem 02

    Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.
*/

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(5, 10)); // 99

/* 
    Problem 03

    The parseInt() function parses a string and returns an integer. 
    It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.
*/

console.log(parseInt("11", 2)); // 3
//[The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.]
