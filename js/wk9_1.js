/* DOM steps:
(0) on HTML, specify event handler, eg. onclick="fun1();"
(1) specify id in HTML elements you want to refer
(2) get the reference to the elements 
    var divObj = document.querySelector("#fun");
(3) Use the reference to the object as neede
    divObj.innerHTML = "<h3 style='color: green;'>Have fun.</h3>"
*/

function fun1() {
  // alert("Hello");
  // divObj: reference to the div object.
  var divObj = document.querySelector("#fun");
  divObj.innerHTML = "<h3 style='color:brown'>Have fun!</h3>";
  // <div> Have fun! </div>
  // property innerHTML means:
  // Everything in between starting tag & closing tag
}
function fun2() {
  var divObj = document.querySelector("#fun");
  divObj.innerHTML = '<img src="../hero.jpg" alt="hero">';
}
// function fun3() {
//   var divObj = document.querySelector("#fun");
//   divObj.innerHTML = '<img src="../hero.jpg" alt="hero">';
// }

var fun3 = function () {
  var divObj = document.querySelector("#fun");
  var newObj = document.createElement("h2");
  // <h2> </h2>
  var newTxt = document.createTextNode("Man, you're smart");
  // text: "Have fun3!"

  newObj.appendChild(newTxt);
  // <h2>"Have fun3!"</h2>

  divObj.appendChild(newObj);
};

function fun4() {
  // var h2Obj = document.querySelector("#dom1");
  // var h2Obj = document.getElementById("dom1");
  var h2Obj = document.querySelectorAll("h2");
  for (let item of h2Obj) {
    item.style.color = "#c634eb";
    item.style.backgroundColor = "rgb(66, 245, 209)";
    item.textContent(Bingo);
  }
}
