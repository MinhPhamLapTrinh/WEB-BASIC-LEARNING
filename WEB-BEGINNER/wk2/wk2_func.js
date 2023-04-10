/* modularity, functions 
    in C program, how to define a function square
    square (2) ==> 4
    square (9) ==> 81
    int square(int num)
    {
        int result;
        result =  num * num;
        return result
    }
 */
// var displayResult;
// var num1 = 6;
// var num2 = 2;
// var displayResult = num1 + "^" + num2 + "=" + square(num1);
// console.log(displayResult);

// function square(num) {
//   var result = num * num;
//   return result;
// }
// // console.log ("6^2=" + square(6));
// console.log ('9^2 = ${square(9)}'); // display 9^2 = ${square(9)}
// // template literal
// console.log (`9^2 = ${square(9)}`) // display 9^2 = 81
// console.log (`Hello,

// World!`); // go new line
// // whenever we leave the space, it will display the space.
// console.log ("Hello, \nWorld!");

// function with 1 parameter, or more parameters
/* defines a JavaScript function, name power()
it takes two parameters: base, exponent
it returns the result of base ^ exponent
call/ test the function, display the result like.
e.g., 3^2 = 9
      3^3 = 27
      3^4 = 81
 */
// function power(base, exponent) {
//   var result;
//   for (var i = 0; i <= exponent; i++) {
//     result = base ** i;
//     console.log(`3^2 = ${result}`);
//   }
//   return result;
// }
// console.log (power(3, 4));

// function power(base, exponent) {
//   var result = base;
//   for (var i = 1; i <= exponent; i++) {
//     result *= base;
//   }
//   return result;
// }
// for (var i = 2; i <= 5; i++) {
//     console.log(`3^${i} = ${power(3, i)}`);
// }
//==================================================
// function sayHelloName(name) {
//   console.log(`Hello ${name}`); // Hello name
// }
// sayHelloName("Minh"); //Hello Minh
//==================================================
/* Write a JS function add()
it takes 3 numbers parameters
return the sum of all the numbers
 */
// function add(num1, num2, num3) {
//   return num1 + num2 + num3;
// }
// built - in obj: arguments
// function addAny() {
//   var i,
//     result = 0;
//   for (i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   return result;
// }
// console.log(addAny(1, 2, 3));
// console.log(addAny(1, 3, 9, 12));
// **********************************************
// function addAny2(...list) { // list is an array
//   var i,
//     result = 0;
//   for (i = 0; i < list.length; i++) {
//     result += list[i];
//   }
//   return result;
// }
// console.log(addAny2(1, 2, 3));
// console.log(addAny2(1, 3, 9, 12));
// --------------------------------------------------------
/* define a function calcSalary()
it takes 3 parameters: base, level, bonus
calculate the toltal salary as:
base multiply level plus bonus
return the total salary
call the function display the total salary */
// function calcSalary(base, level, bonus) {
//   if (bonus) {
//     var totalSalary = base * level + bonus;
//   } else {
//     totalSalary = base * level;
//   }
//   return totalSalary;
// }
// function calcSalary(base, level, bonus = 0) {
//   var totalSalary = base * level + bonus;
//   totalSalary = base * level;
//   return totalSalary;
// }

// console.log(calcSalary(1000, 2, 100));
// console.log(calcSalary(1000, 2)); // what if we dont have bonus?
// ---------------------------------------------------------------

/* closure, built-in function, A1
write a JS function, name it student() 
taking 1 parameter: name 
function returns a string
my name is name (parameter).
 */
// 1. function declaration
// function student(name) {
//   var result;
//   // result = "My name is " + name;
//   result = `My name is ${name}`;
//   return result;
// }
// console.log(student("Minh"));
// ---------------------------------------------
// 2. function expression
// var student = function (name) { // a function is an object, and an object is a value
//   var result;
//   // result = "My name is " + name;
//   result = `My name is ${name}`;
//   return result;
// };
// console.log(student("Minh"));
//-----------------------------------------
// 3. Closure
/*
  Closure: nested functions, a function inside another function
  Rules in closure:
  (1)inner function can access the parameters, or local variable from outer function
  (2)outer function CANNOT access the parameters, or local variables from inner function
*/
// function program(prog) {
//   var school = "SDDS";
//   var student = function (name) {
//     var result;
//     result = `My name is ${name}.
//     I am from program ${prog}
//     at school of ${school}`;
//     return result;
//   };
//   // console.log(name); // No
//   // console.log(result); // No
//   return student; // return function
// }
// var temp1 = program("CPA"); // temp 1 is a "student" function becasue program returns FUNCTION
// var temp2 = temp1("Minh"); // temp2 is a string because student function returning a string.
// console.log(program("CPA")("Minh"));
// // console.log(program("CPA", "Minh")) // wrong
//-------------------------------
// 4. built-in functions
/* (1) Number(); convert the whole string to a number,
if part of the string is not a number (e.g., "abc10") could whole num or float num
  (2) parseFloat(): 
    parse the string until the first character that is a float
    if the first character is not a number, it returns NaN
 */

// var price = "10.98"; // user input usually comes as string // 10.98abc is not allowed
// var num = 2, total;
// var hardcover = 1;
// // total price is price multiply num
// // total  = price * num;
// total += hardcover;
// console.log(total);
// var x = "10.99", y = "6", m = "abc", k = "7abc", u = "8.98abc";
// var result;
// x = Number(x); // convert string to number
// k = Number(k); // NaN: Not a Number, not error, if ( x == NaN)
// result = k + 1;
// console.log(result);

// var x = "10.99", y = "6", m = "abc10", k = "7abc", u = "8.98abc", 
// var q = "1A"; // Hex 1A in decimal value: 16 + 10 = 26
// var result;
// // x = Number(x); m, k ,u, giving NaN
// // x = parseFloat(u); // k and u will work 
// x = parseInt(q, 16); // 16 is Heaxadecimal, base 16
// result = x;
// console.log(result);

var str = "3 + 4" // Is it a number?
var value = eval(str); // evaluate the string
console.log(value);

//isNaN(parameter): 
// if parameter is not a number, it returns true
// otherwise, returns false 
console.log(isNaN(str)); // check is it not a number right? 