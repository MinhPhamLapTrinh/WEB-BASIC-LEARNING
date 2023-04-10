function addPara()
{
    var container=document.querySelector("#newPara");
    container.innerHTML = "Good morning."
}
function addMore()
{
    var dom_para=document.querySelector("#container");
    var dom_newNode = document.createElement("h1");
    var dom_text = document.createTextNode("Add more");
    dom_newNode.appendChild(dom_text);
    dom_para.appendChild(dom_newNode);
}
