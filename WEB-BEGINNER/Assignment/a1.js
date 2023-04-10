/***********************************************************************
 * Assignment 1:
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 * Name: Duc Minh Pham Student ID: 103055224 Date: Jan 29 2023
 ***********************************************************************/
function playNumbers(...args) {
  var isAllNum = true;
  if (args.length == 0) {
    console.log("There are no inputs.");
    isAllNum = false;
  } else {
    for (var i = 0; i < args.length; i++) {
      if (isNaN(args[i])) {
        isAllNum = false;
        console.log(args[i] + " is not a number");
      }
    }
  }
  if (isAllNum == true) {
    var largestNum = args[0];
    var sum = 0;
    for (var i = 0; i < args.length; i++) {
      if (args[i] > largestNum) {
        largestNum = args[i];
      }
      sum += args[i]; // sum of arguments
    }
    console.log(
      `The largest number of (${[...args].join(", ")}) is ${largestNum}`
    );
    console.log(
      `The average of (${[...args].join(", ")}) is ${sum / args.length}`
    );
  }
}

console.log("/***************************** Task1 *************************/");
playNumbers();
playNumbers("abc", 3, "hello");
playNumbers(9, 3, 6);
playNumbers(3, 5, 1, 3, 5);
playNumbers("Good day!", 3, 4, 32, "hi", "we");

function convertCF(val, cf) {
  var result = 0;
  if (isNaN(val)) {
    console.log("I need a number.");
  } else if (cf != "C" && cf != "c" && cf != "F" && cf != "f") {
    console.log("I am confused :(");
  } else if (cf == "c" || cf == "C") {
    result = val * 1.8 + 32; // convertion from C to F
    console.log(`${val}C is equivalent to ${result}F`);
  } else if (cf == "f" || cf == "F") {
    result = (val - 32) * (5 / 9); // convertion from F to C
    console.log(`${val}F is equivalent to ${result}C`);
  }
}

console.log("/***************************** Task2 *************************/");
convertCF("avc", "F");
convertCF("32", "M");
convertCF(32, "F");
convertCF(0, "C");
convertCF(122, "F");
