// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line
console.log(myStr);



// Setup
const lastName = "Lovelace";
// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
console.log(secondToLastLetterOfLastName);



const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; ; // Change this line
// Only change code above this line
console.log(wordBlanks);

// Only change code below this line
const myArray = ['hello', 2];
console.log(myArray);

// Only change code below this line
const myArray1 = [['hello'], ['word']];
console.log(myArray1);


const myArray2 = [50, 60, 70];
const myData = myArray2[0];


// Setup
const myArray3 = [18, 64, 99];
myArray3[0] = 45;
// Only change code below this line


const myArray4 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData4 = myArray[2][1];


  // Setup
const myArray5 = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray5.push(["dog", 3]);


// Setup
const myArray6 = [["John", 23], ["cat", 2]];
// Only change code below this line
const removedFromMyArray = myArray6.pop();
console.log(myArray6);


// Setup
const myArray7 = [["John", 23], ["dog", 3]];
// Only change code below this line
const removedFromMyArray2 = myArray.shift();


// Setup
const myArray8 = [["John", 23], ["dog", 3]];
myArray8.shift();
// Only change code below this line
myArray8.unshift(["Paul", 35]);


const myList = [];
myList.push(['Heelo', 2]);
myList.push(['Heelos', 3]);
myList.push(['Heeloss', 4]);
myList.push(['Heelosss', 5]);
myList.push(['Heelossss', 6]);

console.log(myList);


function reusableFunction() {
    console.log("Hi World");
  }
  reusableFunction();


function functionWithArgs(param1, param2) {
    console.log(param1 + param2);
}
  functionWithArgs(1, 2);
  functionWithArgs(7, 9);


  function timesFive (num) {
    return num * 5;
  }
  const resultat = timesFive(5);










  // Declare the myGlobal variable below this line
let myGlobal = 10;
let oopsGlobal = 5;
function fun1() {
  // Assign 5 to oopsGlobal Here
 let oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}



function myLocalScope() {
    // Only change code below this line
    let myVar;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);



  // Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
let outerWear = 'sweater';
  // Only change code above this line
  return outerWear;
}

myOutfit();




// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive () {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();




// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

