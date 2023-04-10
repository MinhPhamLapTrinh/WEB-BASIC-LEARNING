// // /* JavaScript is loosely typed programming/scripting language
// // * there is no int, double, or float, in JavaScript
// // variables get their data type when they get values
// // in C: int x=10;
// // */
// // var x=10; // declare a variable
// // x += 100; // x = x+100; // x is 100
// // x *=0.5; // x is 55
// // var y =9.9;
// // var z;

// // var str = "Hello World";
// // // in C
// // // char str[30] = "Hello World";
// // z = x+y;
// // str = "Good Morning";
// // // as long as one side of + is string,
// // // + is concatenation
// // str += " Everyone."
// // str += 10;
// // // display the value
// // console.log(str);

// /* given a  circle with radius 1,
// using variables to calculate the area of circle
// display the area in the format:
// The are of the circle with radius 1 is 3.14
// */

// // var circle =3;
// // var radiusValue =3.14;
// // var area;
// // area = (circle*circle) * radiusValue;
// // var str = "The area of " + circle + " cycle is: "+area;
// // console.log(str);

// // var str ="I'm happy";
// // console.log(str);

// const pi = 3.14;
// var radius = 10, area =0;
// area =pi * radius * radius;

// three programming constructs
/*
    (1) sequence
    (2) selection
    (3) iteration
 */
// var x = "6"; // string
// var flag="Good";
// // if (x ==6) // number 6 == '6'
// if (x ===6) // exact comparision
// {
//     flag="Yes";
// } else {
//     flag="no";
// }
// console.log(flag);

/* define a variable grade, initialize a value, e.g., 98
    if the grade is greater or equal to 90,
    you display "Congratulations! You got A+."
    otherwise display "Fail."
 */
// var grade = 1000;
// var flag;
// if (grade >= 90 && grade <= 100)
// {
//     flag="Congratulations! You got A+.";
// } else if (grade >= 80 && grade < 90)
// {
//     flag="You got A";
// } else {
//     flag="Fail.";
// }
// console.log(flag);

// (3) iteration
// 3 ^ 2 = 9
// 3 ^ 3 = 27
// 3 ^ 4 = 81
// define 2 variables, base & component
// define another variable, result
// result is the power with the base and component

const base = 3;
const component = 5;
let result = 1;

for (let i = 0; i <= component; i++)
{   
    result = base + "^" + i;
    console.log(`${result} = ${base ** i}`);
}