/*
let a = 11
let b = 5
console.log(a + b) // Addition
console.log(a - b) // Subtraction
console.log(a * b) // Multiplication
console.log(a / b) // Division
console.log(a ** b) // Exponential multiplication
console.log(a % b) // Modulo
*/

/*
let c = 10
c++;
console.log(c++); 

let d = 10
d--;
console.log(--d);
*/

/*
let a = 11;
if(a % 2 === 0){
    console.log("even")
}else {
    console.log("odd")
}
*/

/*
let a = 1;
a += 1 // a = a + 1
a -= 1 // a = a - 1
a *= 1 // a = a * 1
a /= 1 // a = a / 1
*/

/*
let a = "11";
console.log(a === 11); // equality operator/strictly equal operator
*/

/*
let a = 10;
console.log(a !== 11); // inequality operator/strictly inequal operator
*/

/*
let score = 10;
if (score <= 10){
    console.log("Try Again...");
}else{
    console.log("Congratulations!")  // greater than/ less than operators
}
*/

/*
let score = 10;
score <= 10 ? console.log("Try Again...") : console.log("Congratulations!"); //ternary operator
*/

/*
let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn && isAdmin){
    console.log("You have full access!");
}else{
    console.log("Unauthorised user.");  //logical "and" operator
}
*/

/*
let isLoggedIn = false;
let isAdmin = true;

if (isLoggedIn || isAdmin) {
    console.log("You have access")
}else{
    console.log("Unauthorised user")  //logical "or" operator
}
*/

/*
let farenheit = prompt("Enter farenheit temperature");
let celsius = ((farenheit - 32) * 5) / 9;
alert(`${Math.round(celsius)} degree celsius`);
*/

/*
let MRP = 200
let SLP = 150
let discountPercentage = ((MRP - SLP) * 100) / MRP;
console.log(`${discountPercentage}%`);
*/

/*
let weight = prompt("Enter weight in kgs");
let height = prompt("Enter height in metres");
let bmi = weight / (height * height);
alert(`${Math.round(bmi)} bmi`);
*/

/* ELSE IF CONDITIONS:
let temp = 20
if(temp < 20) {
    console.log("It's a cold day");
}else if(temp === 20) {
    console.log("It's a moderate day");
}else {
    console.log("It's a hot day");
}
*/

/* SWITCH CONDITIONS:
let animals = ["eagle", "cheetah", "lion", "alligator"]
let animal = ""

switch (animal) {
    case "eagle":
        console.log("fly high");
        break;
    case "cheetah":
        console.log("runs fast");
        break;
    case "lion":
        console.log("king of the jungle");
        break;
    case "alligator":
        console.log("likes fruit");
        break;
    default:
        console.log("try another animal");
}  
*/

/* ELSE IF CONDITIONS ASSIGNMENT:
let val = 12
if(val < 5) {
    console.log("tiny")
}else if(val < 10) {
    console.log("small")
}else if(val < 15) {
    console.log("medium")
}else if(val < 20) {
    console.log("large")
}else {
    console.log("huge")
}
*/


let users = ["admin", "subAdmin", "testPrep", "user"]
let user = "testPrep"

switch(user) {
    case "admin":
        console.log("gets full access");
        break;
    case "subAdmin":
        console.log("gets access to create and delete courses");
        break;
    case "testPrep":
        console.log("gets access to create and delete tests");
        break;
    case "user":
        console.log("gets access to consume content");
        break;
    default:
        console.log("invalid user");
} 

