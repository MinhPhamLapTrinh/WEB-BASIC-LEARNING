/*
I declare that this test is my own work in accordance with Seneca Academic Policy. No part of this
assignment has been copied manually or electronically from anybody else or distributed to other
students.
Name: Duc Minh Pham Student ID: 103055224
 */

// Task 1
var customer = [
  {
    name: "name1",
    item: "item1",
    num: 2,
    price: 20,
    getTotal: function () {
      return this.num * this.price;
    },
    printInfo: function () {
      console.log(
        `${this.name} purchased ${this.num} ${this.item} at the price of ${this.price}`
      );
      console.log(`${this.name} spent ${this.getTotal().toFixed(2)} in total`);
    },
  },
  {
    name: "name2",
    item: "item2",
    num: 5,
    price: 30,
    getTotal: function () {
      return this.num * this.price;
    },
    printInfo: function () {
      console.log(
        `${this.name} purchased ${this.num} ${this.item} at the price of ${this.price}`
      );
      console.log(`${this.name} spent ${this.getTotal().toFixed(2)} in total`);
    },
  },
  {
    name: "name3",
    item: "item3",
    num: 10,
    price: 25,
    getTotal: function () {
      return this.num * this.price;
    },
    printInfo: function () {
      console.log(
        `${this.name} purchased ${this.num} ${this.item} at the price of ${this.price}`
      );
      console.log(`${this.name} spent ${this.getTotal().toFixed(2)} in total`);
    },
  },
  {
    name: "name4",
    item: "item4",
    num: 8,
    price: 15,
    getTotal: function () {
      return this.num * this.price;
    },
    printInfo: function () {
      console.log(
        `${this.name} purchased ${this.num} ${this.item} at the price of ${this.price}`
      );
      console.log(`${this.name} spent ${this.getTotal().toFixed(2)} in total`);
    },
  },
];
console.log("==== Minh's Store ====");
console.log("Best customers: ");
console.log("=======================");
var profit = 0.0;
for (var i = 0; i < customer.length; i++) {
  if (customer[i].num * customer[i].price >= 120) {
    customer[i].printInfo();
  }
profit += customer[i].num * customer[i].price;

}

console.log(`Store Profit is ${(profit*0.3).toFixed(2)}`);
