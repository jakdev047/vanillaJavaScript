/* 
    Data Type

        Primitive Data Type => string, number, boolean, symbol, undefined, null
        Reference Data Type => array, object, functions

        Primitive Data Type
        ====================
        Contain Single Value
        String: "Jubayer" || "47"
        Number: 47 || 4.7  || -47
        Boolean: true || false
        undefined 
        null
        Symbol('jubayer') !== Symbol('jubayer') 

        Reference Data Type
        ====================
        Contain Multiple Value

*/

// write down the data in a memory space & call them
let dataString = "karim is a bad boy";
let dataStringOne = 'karim is a "bad" boy';

console.log(dataString);
console.log(dataStringOne);

// checking the type
const dataOne = 47;
const dataTwo = "47";

console.log(`dataOne ${typeof dataOne} => ${dataOne}`);
console.log(`dataTwo ${typeof dataTwo} => "${dataTwo}"`);

// about bio
const myName = "I am Jubayer.";
const profession = "I am a Frontend Developer.";
const comment = "I Love JavaScript.";
const bio = myName + profession + comment;

console.log(bio);
