/* wk3_array.js
built-in objects: array, RegExp, Date, Math
*/

var a = (3, 5, 2, 87);
var b = new Array(5, 2, 4, 12, 42);
var c = [];
var d = new Array();
var result;
var e = ["red", "brown", "green", "blue"];

console.log("original array", e);
//  result = a.pop(); // remove the last element from the array and return it.
// a.push(100); // add an element at the end of the array.
// result = a.shift(); // remove the first element from the array
// console.log(result);

// result = e.sort();
// result = e.reverse();
// console.log(result);
// console.log("the after value: ", e);

// Sort the array e in descending
// result = e.sort();
// console.log ("The sorting: ", e);
// result = e.reverse();
// console.log ("Descending mode: ",e);

// result = e.join(" "); // result is a string
// var temp = result.split(" ");
// console.log(result);
// console.log("the after value: ", temp);
// console.log(temp);

// var a = [3, 5, 2, 87]
// var sum=0; avg=0;
// for (var i=0; i < a.length; i++)
// {
//     sum += a[i];
// }
// if (a.length > 0)
// {
//     avg = sum / a.length;
// }
// console.log(`the average of ${a} is ${avg}.`);

var a = [3, 5, 2, 87];
for (item of a) {
  console.log(item);
}
