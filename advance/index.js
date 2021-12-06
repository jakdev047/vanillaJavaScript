require("./promise");
require("./regularExpression");
require("./advanceArray");

/*
    Scopes
    Hoisting
    var, let & const
    Closures
    Event Loop
    Recursion
    premitive vs Refernce
    Prototype Inheritance & ES6 Class,
    Execution Context
    Higher Order Functions
    this keyword
    Asybnchronous JS, Callback, Promis & asyncAwait


*/

/* 
    Hoisting
    
    Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (script or function).

    console.log(a);  // undefined   || first step all variable define  a = undefined; this is a variable declaration part   ||  let a;
    var a;                          || then execution part start                                                            ||  console.log(a); // undefined
    a = 10;                         || console.log(a); // undefined                                                         ||  a = undefined;
    console.log(a); // 10           || assign part a = 10;                                                                  ||  a = 10
                                    || console.log(a); // 10                                                                ||  console.log(a); // 10   
    
*/

/* 
    Closures
    
    A closure gives you access to an outer function’s scope from an inner function.

    function init() {

        // name is a local variable created by init
        var name = 'Mozilla';
        
        // displayName() is the inner function, a closure
        function displayName() {
            alert(name); 
        }

        displayName();
    }
    
    init();  
    
*/