// Declaring variables with let

let name = 'Harry';
name = 'Ron';

//Declaring constants with const
const firstName = 'Ron';
const lastName = 'Weasley';
let age = 11;

// Strings
const school = `hogwarts`;

// Difference between single quotes and back ticks
console.log(name + ' is ' + age + ' years old.');
console.log(`${name} is ${++age} years old.`);

console.log(name.length);

// Numbers
let number = 2;
const gravitation = 9.81; // m/s^2
const PI = Math.PI;
console.log(PI);

number = 2 + 1;
console.log(number);

//Math Object and differences in rounding
let someNumber = 4.48;
console.log(Math.round(someNumber));
console.log(Math.ceil(someNumber));
console.log(Math.floor(someNumber));

// string concatination vs mathematic operations
console.log(name + 8);
console.log(name - 8);

const stringNumber = '12.98';
console.log(Number(stringNumber) + 7);
console.log(parseFloat(stringNumber) + 7);

//Booleans
let isMagician = false;
isMagician = true;

const wand = 'Eldaward';
console.log(wand);

// Arrays and array methods

const weasleys = ['Ginny', 'Ron', 'Fred', 'George', 'Percy', 'Charly', 'Bill'];
// Add a new entry to end of array
weasleys.push('Molly');
weasleys.push('Arthur');
weasleys.push('Harry');

// Remove last entry from array
weasleys.pop();
console.log(weasleys);
// I know which index to look for
console.log(weasleys[1]);
// search for index of Percy
console.log(weasleys.indexOf('Percy'));
console.log(weasleys[4]);
weasleys.push('Bill');
console.log(weasleys);

// Look for something in an array and return first value that matches
console.log(weasleys.find((familyMember) => familyMember === 'Bill'));

// Checks if at least one item in an array passes the test and returns true or false
console.log(weasleys.some((familyMember) => familyMember === 'Harry'));

const potters = ['Harry', 'Lilly', 'James'];

// Nested Array
const magicFamilies = [weasleys, potters];
console.log(magicFamilies);
console.log(magicFamilies[1][2]);

// Spread operator to spread to arrays into a new one
const magicParty = [...weasleys, ...potters];
console.log(magicParty);

// Look for index of an item in an array
const whereIsHarry = magicParty.indexOf('Harry');
console.log(whereIsHarry);

// Removes 1 item from array at index of "whereIsHarry"
magicParty.splice(whereIsHarry, 1);
console.log(magicParty);

//Adds several items to the beginning of array
magicParty.unshift('Hedwig', 'Pig');
// Removes first item of an array
magicParty.shift();
console.log(magicParty);

// Sorts an array
const newArray = weasleys.sort(sortByNameLength);
console.log(newArray);

function sortByNameLength(a, b) {
  return a.length - b.length;
}
