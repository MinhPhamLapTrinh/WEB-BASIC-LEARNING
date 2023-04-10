/******************************************************************
 ***
 * Assignment 2
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (Including web sites) or distributed to otherstudents.
 * Name: Duc Minh Pham Student ID: 103055224 Date: Feb 12 2023
 *******************************************************************
 **/
// Task 1
// a. Creating an array of courses objects.
var courses = [
  {
    code: "APC100",
    name: "Applied professional communication",
    hours: 3,
    URL: "http:/www.senecacollege.ca",
  },
  {
    code: "IPC144",
    name: "Introduction to C programming",
    hours: null,
    URL: "http:/www.senecacollege.ca/ipc",
  },
  {
    code: "ULI101",
    name: "Linux and the Internet",
    hours: 4,
    URL: "http:/www.senecacollege.ca/lin",
  },
  {
    code: "IOS110",
    name: "Windows Operating System",
    hours: 4,
    URL: "http:/www.senecacollege.ca/ios",
  },
  { code: "EAC150", name: "College English", hours: 3, URL: null },
];

// b. remove and display the last courses in the array.
var lastCourse = courses.pop();

console.log(`The last course in the array is:
                code: "${lastCourse.code}",
                name: "${lastCourse.name}"`);
// c.Create another course object BTI225,
var newCourse = {
  code: "BTI225",
  name: "Web Programming Principles",
  hours: 4,
  url: "http:/www.senecacollege.ca/web",
};
// d. Add the course object BTI225 to the end of the courses array
courses.push(newCourse);
// console.log(courses[4]);
// Use for loop to loop through the course array to add the hours of the courses and log the total hours.

var totalHours = 0.0;
for (var i = 0; i < courses.length; i++) {
  totalHours += courses[i].hours;
}
console.log(`Total hours for all courses: ${totalHours} hours`);

// Task 2
//a. Create a constructor function (named: Student) which will be used to create objects.

function Student(name, dob, sid, program, gpa) {
  this.name = name;
  this.dob = dob;
  this.sid = sid;
  this.program = program;
  this.gpa = gpa;
}

Student.prototype.toString = function () {
  return `Student info for ${this.name}: 
                Date of Birth: ${this.dob.toLocaleString()}, ${this.sid}
                Program: ${this.program},
                GPA: ${this.gpa}`;
};

// b

var students = [];
var student1 = new Student(
  "Duc Minh",
  new Date("2003-11-25"),
  "103055224",
  "CPA",
  3.1
);
var student2 = new Student(
  "Chris Bumstead",
  new Date("1999-01-25"),
  "103055225",
  "BSD",
  3.9
);
var student3 = new Student(
  "Harry Potter",
  new Date("2001-03-30"),
  "103055226",
  "CPP",
  3.7
);
var student4 = new Student(
  "The Flash",
  new Date("2000-07-06"),
  "103055227",
  "CPA",
  3.5
);

students.push(student1, student2, student3, student4);
// c
students.forEach(function (students) {
  console.log(students.toString());
});
// d
function highGPA(arg) {
  var highestGpa = arg[0]; // set the highest gpa as the first index.
  for (var i = 0; i < arg.length; i++) {
    if (arg[i].gpa > highestGpa.gpa) {
      highestGpa = arg[i];
    }
  }
  return highestGpa;
}
// e
console.log(`The student with the highest GPA is ${highGPA(students).toString()}`);

