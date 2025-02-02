 //Problem 1000: Why did the code produce that output? If applicable, how would you get the index value that did not output?
const exampleVar = "example";
const exampleArr = ["ex", "am", "ple"];
console.log(exampleArr);
 //1. ["ex", "am", "ple"]
 //2. ["ex", "am", "ple"]
 //3. all values did output !
 

//1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
 //1. Tesla ; Mercedes 
 //2. Tesla ; Mercedes
 //3. Why did the code produce that output? If applicable, how would you get the index value that did not output? Cause the js goes line by line , executing the constat

//2
const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName);
console.log(employeeName);
 //1. Elon, Elon
 //2. Elon, Error
//3. Apparently, employeename became  othername, which lead to second console log to give an error


//3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

 //1. Error ,     name: 'Phil Smith',age: 47, height: '6 feet'
 //2. 12345 ; undefined
//3. Why did the code produce that output? If applicable, how would you alter this code without changing either console.log?
//cause the password wasnt identified within person , to fix this we can add it under person {}

//4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
const [,,,,,fourth] = numbers;
//Predict the output
console.log(first === second);
console.log(first === third);
console.log(first === fourth);
 //1. nothing;nothing
 //2. false , true 
//3. Why did the code produce that output? after rechecking, cause 2 which is first is not equal to second which is 5 , and 2 is equal to third which is 2 
// Declare a new variable for the value at the 4th index of the array and console.log it.

//5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

 //1. 'value'';[1, 5, 1, 8, 3, 3];1;[5,1,8,3,3]
 //2. The actual output: value;[ 1, 5, 1, 8, 3, 3 ]; 1; 5;
//3. cause we did destruct lasttest into key and second key, then seccond key 0 is 1 , and willthiswork became 5 after skipping first number

//6
var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
    var name = names[index];
    console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
    }
actuallyPrintingNames();
}
printNames(beatles);
 //1. 5 , console.log(name + ' was found at index ' + beatles[one by one]);then console.log('name and index after loop is ' + name + ':' Ringo);
 //2.  5 , console.log(name + ' was found at index ' + beatles[one by one]);then console.log('name and index after loop is ' + name + ':' Ringo);
//3.First, how many scopes does the following code block contain? 5 , names.length is 5, index is 0, therefore it the loop starts with Paul then ends with ringo, the second loop starts with the latest entry which is ringo

//7
function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
    let name = names[index];
    console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
    }     
 //1. Prediction of the example output should be in commented-out code here.
 //2. The actual output
//3. Why did the code produce that output??? non clear question

//8
const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
    const name = names[index];
    console.log(name + ' was found at index ' + index);
    }
}
actuallyPrintingNames();
}
printNames(beatles);
 //1. Paul was found at index 0 etc 
 //2. Paul was found at index 0 etc 
//3. Why did the code produce that output? Explain the output : the loop goes through the array and prints the name and index of each name in the array, in this case it started with paul and ended with ringo , all based on the names.length which is 5, therefore it read all the array and quit the loop, function prints names got an inner function called actuallyprintingnames,


//9
const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
            composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) 
console.log(planet === planetCopy)
 //1. True , False 
 //2. True , False 
//3. Why did the code produce that output? Explain why each console.log looks the way it does : reason behin was using a Spread operator,  which copied all inner data from planet , so both have same inner data and values, but from the outside they are different



