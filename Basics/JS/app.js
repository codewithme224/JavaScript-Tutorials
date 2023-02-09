
//! Variables
// let name = "John Smith"

let name;
name = "John Smith";
console.log(name);

let numbers = [1, 2, 3, 4, 5];

let boolValue = false;

let value = null;
console.log(value);


// Const

const time = Date.now();
console.log(time);

const str = "hello";
// str = "world"; // error

const num = 12;


//! DataTypes

let count = 100;
count = false;
count = "hello";

console.log(typeof count);

// Number
let number = 100;
console.log(typeof (number));

// Boolean values
let bolValue = false;
console.log(typeof bolValue);

// Undefined values
let someOne;
console.log(someOne);

// Null values
let object = null;
console.log(typeof object);

console.log(null === undefined);

// NaN
let result = 100 / "hello";
console.log(result);

console.log(NaN/2);
console.log(NaN == NaN);

// Symbol
let s = Symbol("hello");
console.log(typeof s);


// BigInt 
let pages = 2094080959050954n // 'bigint'
console.log(typeof pages);


// Objects
let notEmpty = {
    name: "John Smith",
    age: 30,
    isMarried: false,
    functionName: function() {
        console.log("Hello");
    }
}
console.log(notEmpty);

// Using Dot notation
console.log(notEmpty.name);

// Using Bracket notation
console.log(notEmpty["isMarried"]);