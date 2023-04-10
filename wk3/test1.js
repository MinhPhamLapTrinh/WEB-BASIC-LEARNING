/*Declaration:
I declare that this test is my own work in accordance with Seneca Academic Policy. No part of this
assignment has been copied manually or electronically from anybody else or distributed to other
students.
Name: Duc Minh Pham Student ID: 103055224
 */

function findSum(...arguments) {
  var isEqual = true;
  if (arguments.length < 2) {
    console.log("Expected at least two arguments.");
  } else {
    for (var i = 0; i < arguments.length; i++) {
      for (var j = 1; j < arguments.length; j++) {
        if (arguments[i] + arguments[j] == arguments[0]) {
          console.log(`${arguments[i]} + ${arguments[j]} = ${arguments[0]}`);
        } else {
          isEqual = false;
        }
      }
    }
    if (isEqual == false) {
        console.log("No two elements have sum equal to " + arguments[0] + ".");
    }
  }
}

 findSum(10, 2, 3, 4, 6, 8);
// findSum(10, 2, 3, 4);
