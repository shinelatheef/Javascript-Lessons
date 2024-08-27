// single line comment

// multi line comment
/*
here you can write multiple lines of comments.
multi line comment
*/

// better comment
//! "red comment"
//? "blue comment"
//todo "orange comment"  
//* "green comment"


// PRIMITIVE data types
// 1. string => set of characters enclosed in single or double quotes.
let userName = "shine";
console.log(userName);
console.log(typeof(userName));

// 2. number => any sort of number comes under this data type.
let num = 40
console.log(num);
console.log(typeof(num));

// 3. boolean => named after George Boole, booleans are true or false statements.
let isUser = true
console.log(isUser);
console.log(typeof(isUser));

// 4. Undefined => value is not assigned.
let myName;
console.log(myName);
console.log(typeof(myName));

// 5. Null => Intentional absence of a value.
let myName2 = null;
console.log(myName2);
console.log(typeof(null));

// 6. Symbol => any symbol.
let sym = Symbol()
console.log(sym);
console.log(typeof(sym));

// NON-PRIMITIVE data types => data types that are derived from primitive data types.

// 1. Array => a collection of data enclosed in square brackets separated by commas.
let arr = ["string", 40, true, undefined, null]

// 2. Object => collection of data enclosed in curly brackets separated by commas and written in key-value pairs.
let obj = {
    userName : "zareel",
    age : 45,
    isLoggedIn : true,
}

