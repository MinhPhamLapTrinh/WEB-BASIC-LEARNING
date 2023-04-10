/* dom_paragraph.js
    embedded by wk7_dom_paragraph.html
*/
function haveFun1(){
    var dom_fun=document.querySelector("#fun");
    var dom_newNode = document.createElement("h2");
    var dom_text = document.createTextNode("Have Fun");
    dom_newNode.appendChild(dom_text);
    dom_fun.appendChild(dom_newNode);
}

function haveFun2()
{
    var dom_fun = document.querySelector("#fun");
    dom_fun.innerHTML = "have fun...";
}
