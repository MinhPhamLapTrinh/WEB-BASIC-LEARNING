/*wk3_string.js*/
/* built-in objects 
Objects have two features:
(1) properties/ attributes/ data
(2) behavior/ functions/ methods
*/

var str = "Hello World.";
var result;

// result = str.length; // property: How many characters in the string
// result = str.charAt(1); // index starting from 0
// result = str[1]; // the char at the position/ parameter
// result = str.charCodeAt(1); // returns the ASCII of the charactor at the position.
// result = str.indexOf("l"); //
// result = str.lastIndexOf("l");
// // result = str.toLowerCase();
// // result = str.toUpperCase();

// // result = str.substring(1,4); // returns a substring, starting position 1 and ending at position 4
// result = str.slice(1, 4); // do the same thing with "substring"
// result = str.split(" ");
// result = str.startsWith("H"); // returns boolean
// result = str.endsWith("O");
// result = str.includes("ll"); // returns boolean
// console.log(result);
//console.log("Original string: " + str)
// // if defined variable result, but no value, undefined.
// // if no define, but try to access the variable, error, not defined.

// ----------------------------------------------------------------------

/* write a JavaScript function countA()
    it takes one parameter, which is a string
    counts how many letter 'A' or 'a' in the string/parameter
    return the number 
    test your function

    sample runs: countA("AbcAa") ==> 3
    countA("efg") ==> 0
 */

function countA(str) {
  var i,
    count = 0;
  str = str.toLowerCase();
  console.log(str);
  for (i = 0; i < str.length; i++) {
    if (str[i] == "a") {
      count++;
    }
  }
  return count;
}
console.log(countA("AbcAa"));

//------------------------------------------------------------------
/*
    write a function yes()
    it takes one string parameter
    if the parameter is yes, Yes, YES, yEs. etc...
    your function returns true,
    otherwise returns false
 */

// function yes(str){
//     str = str.toUpperCase();
//     if (str == 'YES'){
//         return true;
//     }
//     return false;
// }
// console.log(yes("yEs"));

//----------------------------------------------------------------
// Array: built-in obj
var a = [];
var b = [3, 5, 9, 10];
var c = new Array(3, 6, 7, 3.2, 9.8, "red");
var d = new Array(); // constructor
var result;
// result = b[1];
// b[4] = 100;
// b[10] = 10;
b.push(100); // add the new element to the array from the end.
result = b.pop(); // remove the last element from the array at the end.
result = b.shift(); // remove the first element from the array at the end
b.unshift(89); // insert the new element to the array from the beginning.

console.log(result);
console.log(b);
console.log(d)
