// javascript obj person 2 properties: name, phone

var person1 = {
  name: "Paul",
  phone: "6471234567",
};

var txt = '{ "name":"Paul","phone":"6471234567"}';
var jsObj = JSON.parse(txt); // convert json obj to javascript obj
var jsonTxt = JSON.stringify(person1); // convert json to javascript obj
console.log(person1.name); // Paul
console.log(jsObj.name); // Paul
console.log(jsonTxt); // { "name":"Paul","phone":"6471234567"}
