/*
wk5_custom_obj_2.js
 */
//---------------------------------------------------
// 3. create object: prototypal inheritance
var subject = {
    code: "",
    program: [], // array
    info:{} // obj
};
//using subject as prototype to create objs
var web222 = Object.create(subject);
web222.code = "web222";
web222.program = ["CPP", "CPA"];
web222.info = {hours:4, url:"https://www.senecacollege.ca/~web222"}

var web322 = Object.create(subject);
web322.code = "web322"
web322.program = ["CPA", "CPP"];
web322.info = {hours:8, url:"https://www.senecacollege.ca/~web322"}

var IPC144 = Object.create(subject);
IPC144.code = "ipc144"
IPC144.program = ["CPA", "CPP"];
IPC144.info = {hours:8, url:"https://www.senecacollege.ca/~IPC144"}
console.log(web222.code);
console.log(web222.program[0]);
console.log(web222.info.hours);

var courses = [web222, web322, IPC144]; // array of objs
// notation for subject code for ipc144 using course
/** courses[2].code
 * courses[2].program[3]
 * course[2].info.hours
 */

/** write a loop to add up the hours for all subjects, and displays
 * 
 */

var totalHours = 0;
// courses.forEach(courses => {
//     totalHours += courses.info.hours;
// });
for (var item of courses)
{
    totalHours += item.info.hours;
}

console.log(totalHours);