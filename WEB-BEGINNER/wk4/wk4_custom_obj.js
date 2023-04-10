/*
wk4_custom_obj.js
 */
var person1 = {
    name: "Minh",
    phone: "647.573.2478",
    display: function () {
        console.log(`I am ${this.name}. My phone number is ${this.phone}.`); // this is for current object.
    }
};
// var a = [2,3,5,21,9]; // array
var person2 = {
    name: "Kali",
    phone: "647.123.123"
};

// objects have two features: property & function
var result;
result = person1.name;
console.log(result);
person1.display();
// ----------------------------------------------------------------------------------------------------------------------
// 2. Constructor function
function Person(mn, ph) {
  this.name = mn;
  this.phone = ph;
//   this.display = function () {
//     console.log(`I am ${this.name}. 
//                 My phone number is ${this.phone}.`); // this is for current object.
//   };
}

Person.prototype.display = function () {
  console.log(`I am ${this.name}. 
                My phone number is ${this.phone}.`);
};

var person1 = new Person("Sunny", "416.123.123");
var person2 = new Person("Kali", "416.123.123");
// var result;
// result = person2.phone;
// console.log(result);
// person1.display();
// console.log(person1.display()) // undefined

var a = [person1, person2];
console.log(a[1]);