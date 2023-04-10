/*
    wk4_arr_RegExp_Math.js
    built-in Obj
 */

var a = [3, 4, 2, 5, 9, 23];
var b = new Array (3, 4, 2, 5, 9);
var c = [];
var d = new Array();
var e = ["red", "green", "blue"]
var result;
// any array functions change original array.
result = a.pop(); // remove the last element from the array and return it
result = a.shift(); // the first element

// a[10] = 88;
// result = a[9]

// a.sort();
// e.sort();
// e.sort().reverse();

// result = e.join("*") // return a string, connecting all array elements, seperate by *
// var temp = result.split ("*")
// a.push (100);
// a.unshift(99); // add/insert the element to the beginning of the array

console.log (result);
console.log (a);
console.log (e);
// console.log (temp);
// string function usually don't change the original string.
// var str = "Hello World."
// console.log (str.toUpperCase());

// calculate the average of the array a, display the avg.

// var a = [3, 4, 2, 5, 9, 23];
// var sum = 0,
//   avg = 0;

// let: defines block-level variables, which is only variable in the block, {}
// for ... of
// for (var item of a)
// for (let item of a) {
//     sum += item;
// }

// for ( var i = 0; i < a.length; i++)
// {
//     sum += a[i];
//     var avg = sum / a.length;
// }
// console.log (avg.toFixed(2));

// for (var item of a) {
//   sum += item;
// }
// console.log(`The average of [${a}] is ${(sum / a.length).toFixed(2)}`);

// forEach() is a function for array
// parameter is a function

// function display(item) {
//     item += 100;
//   console.log(index + 1, item);
// }
// display(3)

// var a = [3, 4, 2, 5, 9, 23];
// a.forEach(display); //display is a function (Definition)
//a.forEach(display()); // don't do it. display() is a function call, executing the function display();
// var display = (item) => {
//     console.log(item);
// }
// a.forEach((item) => { // callback function
//     console.log(item); // annonymous function
// });

// function abc(item, index)
// {
//     console.log(index);
// }
// a.forEach(abc); 

// // 1. function declaration
// function square (n)
// {
//     return n*n;
// }
// // 2. function expression
// var square2 = function(n){
//     return n*n;
// }
// // 3. arrpow notation
// var square3 = (n) => {
//     return n*n;
// }
// console.log(square3(4));

// Regular Expression built-in obj
// var temp = "to";
// var pattern1 = /to/; // modier i means, case insensitive

// var pattern2 = new RegExp (temp);

// var str = "Toronto";
// var result1, result2;
// result1 = pattern1.test(str); // test() belongs to regular expression
// result2 = str.match(pattern1); // match() belongs to string returns the pattern, if no matched pattern, returns null
// console.log(result1)
// console.log(result2)
// // null can be used as a boolean false

// Date: built-in obj
// var today = new Date();
// var christmas = new Date("December 25, 2023"); // create an object and set the value;
// var result;
// result = today.toLocaleDateString();
// result = today.getDate(); // 1-31
// result = today.getDay(); // 0-6, week day, 0:sunday
// result = today.getMonth();// 0-11, 0:January
// result = today.getHours(); // 0-23

// today.setDate(20);
// today.setMonth(10)

// result = today.toLocaleDateString();
// result = christmas.toLocaleDateString();
// console.log(result);

// var a = "My name is not Minh";
// console.log(a)

// Math: built-in obj

var x = 8.3;
var result;
result = Math.round(x); // round up
result = Math.ceil(x);
result = Math.floor(x); // round down
result = Math.pow(5,3) // power (5*5*5)
result = Math.random();
// result = Math.max (3,4,5,1,8,1);
// result = Math.min(3,4,5,6,1,0,8);
console.log(result);

// define a function to return a random number [1..6]
function random()
{ 
   result = Math.floor(Math.random() * 7);
}












