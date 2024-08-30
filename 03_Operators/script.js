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

/*
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
*/

/*
let str = "SHINE"
console.log(str.toLowerCase());

let description = "Lorem10 dolor sit amet, consectet";
let sliced = description.slice(0, 2);
console.log(sliced);


create a greeting app that takes a username, capitalise the first letter and greet the user

let username = prompt("Enter your name");
let firstLetter = username.slice(0, 1).toUpperCase();
let restOfLetters = username.slice(1, username.length)
alert(`Welcome ${firstLetter}${restOfLetters}`);
*/

/*
let hello = "Hello Shine";
console.log(hello.substring(0, 2));
*/

/* ARRAY PROPERTIES: LENGTH
let family = ["zareel", "shine", "shon"];
console.log(family.length);
*/

/* INCLUDES
let family = ["zareel", "shine", "shon"]
console.log(family.includes("zareel"));
*/

/* RETRIEVING ELEMENTS USING BRACKET NOTATION
let countries = ["USA", "INDIA", "UK", "Iceland", "Netherlands"];
let atTwo = countries[2];
console.log(atTwo);
console.log(countries[countries.length-1]);
*/

/* POP
let cars = ["1", "2", "3", "4", "5"];
let lastCar = cars.pop();
console.log(lastCar);
*/

/* PUSH
let cars = ["1", "2", "3", "4", "5"];
cars.push("6");
console.log(cars);
*/

/* NESTED ARRAY
let nestedArray = [["1", "2", "3"], ["4", "5"], ["6", "7"], "8", "9"];
let value = nestedArray[2][0];
console.log(value);
*/

/* SHIFT AND UNSHIFT
let array = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];
array.unshift("new");
console.log(array);
*/

/* TO STRING
let array = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];
console.log(array.toString());
*/

/* CONCATENATION
let arr1 = ["1", "2", "3", "4", "5"];
let arr2 = ["6", "7", "8", "9", "10"];
console.log(arr1.concat(arr2));
*/

/* JOIN
let array = [1, 2, 3, 4, 5];
console.log(array.join("!"));
*/

/* SORT
let array = [2, 1, 3, 4, 5];
console.log(array.sort());
*/

/* REVERSE
let array = [1, 2, 3, 4, 5];
console.log(array.reverse());
*/

/* FLAT
let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(array.flat());
*/

/* SLICE
let array = [1, 2, 3, 4, 5];
console.log(array.slice(0, 3));
*/

/* SPLICE
let array = [1, 2, 3, 4, 5];
array.splice(1, 2, "two, three")
console.log(array);
*/

/* FUNCTIONS
let name = "Shine";
function sayHello() {
    console.log(`Good morning, ${name}`);
}
sayHello();
*/

/* ADD FUNCTION
let add = () => {
    let a = 10;
    let b = 5;
    console.log(a + b);
}
add();
*/

/* FUNCTION THAT TAKES ARGUMENTS 
let greeting = (name) => {
    console.log(`good morning, ${name}`);
}
greeting("shine");
*/

/*
let add = (a, b) => {
    console.log(a + b);
}
add(10, 4);


let userName = "shine";
let greeting = (name) => {
    console.log(`good morning, ${name}`);
}
greeting(userName);
*/

/* write a function that takes a number as an argument and returns whether the number is even or odd.
let input = prompt("enter your number");
let isEven = (num) => {
    num % 2 === 0 ? alert("even") : alert("odd");;
}
isEven(input);
*/

/* create a fuction that returns the length of the array
let array = [1,2,3,4,5];
let returnLength = (array) => {
    return array.length
}
console.log(returnLength(array));
*/

// WHILE AND DO WHILE LOOPS
// initialization, condition, increment/decrement:

/*
let i = 1; 

do
{
    console.log("hi" ,i);
    i++; 
}while(i<=5)
*/

// FOR LOOPS
/*
for(let i=1;i<=100;i++)
{
    if(i%5 === 0) 
        console.log(i);
}
*/

/*
let num = 564782

while(num>0) 
{
    console.log(num%10);
    num = parseInt(num / 10);
}
*/

// OBJECTS
/*
let alien = 
{
    name: 'shine',
    tech: 'JS',
    laptop: {
        cpu: 'i7',
        ram: 4,
        brand: 'asus',
    }
}
console.log(alien);

for(let key in alien.laptop)
{
    console.log(key, alien.laptop[key]);
}
*/

//FUNCTIONS
/*
function greet()
{
    return `Hello, ${user}!`;
}
let user = "Shine";
let grt = greet(user);
console.log(grt);
*/

// FUNCTION EXPRESSION
/*
let add = function(num1, num2)
          {
            return num1 + num2;
          }  

let sum = add
let result = sum(5,6)
console.log(sum);
*/

// LOCAL-GLOBAL VARIABLE
/*
function add(num1,num2,num3)
{
    console.log(num1,num2,num3);
    return num1 + num2 + num3;
}
let result = add(5,6,5);
console.log(result);
*/

// ARROW FUNCTION
/*
let add = (num1,num2) => num1 + num2;
let result = add(5,6);
console.log(result);
*/

// METHODS
/*
let laptop = {
    cpu: 'i9',
    ram: 16,
    brand: 'HP',

    compare: function(other) {
        if(this.cpu > other.cpu) 
            console.log(this);
        else
            console.log(other);
    },

    getConfig: function(){
        console.log(this.cpu);
    }
}
laptop.getConfig();
*/

// CONSTRUCTOR FUNCTIONS
/*
function Alien(name, tech){
    this.name = name;
    this.tech = tech;

    this.work = function(){
        console.log("bug_solve")
    }

    return 1;
}

let alien1 = new Alien("Shine", "JS");
let alien2 = new Alien("Shon", "Java");

alien1.tech = "Blockchain";

console.log(alien1);
 alien1.work();
*/

// ODD OR EVEN FUNCTION
/*
let input = 11;
let isOddOrEven = (num) => {
    num % 2 === 0 ? console.log("even") : console.log("odd");
}   
isOddOrEven(input);
*/

// GUEST LIST FUNCTION
/*
let guestlist = ["shine", "zareel", "shon"];
let checkTheList = (name) => {
    if (guestlist.includes(name)) {
        return "Welcome"
    }
    else {
        return "Not on the list"
    }
}
console.log(checkTheList("shin"));
*/

// REVERSE A NUMBER FUNCTION
/*
let input = 12345;
let revNumber = (num) => {
    let toNumber = num.toString().split("").reverse().join("");
    return Number(toNumber);
}
console.log(revNumber(input));
*/

// CAPITALISE FIRST LETTER FUNCTION
/*
let input = "java"
let correctCase = (word) => {
    let slicedLetter = word.slice(0,1).toUpperCase();
    let restOfWord = word.slice(1,word.length);
    return slicedLetter + restOfWord;
}
console.log(correctCase(input));
*/