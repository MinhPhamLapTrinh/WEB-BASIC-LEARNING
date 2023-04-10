/* dom_list.js
    embedded in wk7_dom_list.html
*/
var listTitle = "Student List (Alphabetical)";
var studentArray = ["John", "Bob", "Amy", "Haley", "Kimberly"];

window.onload = function()
{
    var dom_listTitle = document.querySelector("#listTitle");
    dom_listTitle.innerHTML = listTitle;
    console.log(dom_listTitle);
    var dom_list = document.getElementById("listContainer");
    console.log(dom_list);
    var txt = "";
    studentArray.sort();
    for (let i=0; i<studentArray.length; i++)
    {
        txt += studentArray[i] + "<br>"; 
    }
    /* 
    after the for loop, variable txt will be assigned a string like:
     (note: it's sorted in line 15)
    Amy<br> Bob<br> Haley<br> John<br> Kimberly<br>
    */

    dom_list.innerHTML = txt;
         
    // create a button
    
    /* var aBox = document.querySelector("#aBox");
    var dom_button = document.createElement("button");
    var dom_text = document.createTextNode("New Button");
    dom_button.appendChild(dom_text);
    aBox.appendChild(dom_button); */
   
}
function addList1()
{
    /// dynamically add student list by click a button
    var dom_addList = document.querySelector("#addList");
    var ol = document.createElement("ol");
   
    var li=null, li_text = null;
    for (var i = 0; i<studentArray.length; i++)
    {
        li = document.createElement("li");
        li_text = document.createTextNode(studentArray[i]);
        li.appendChild(li_text);
        ol.appendChild(li);
    }
        /* 
    after the for loop, variable ol will be an ordered list like:
     (note: it's sorted in line 15)
    <ol>
        <li> Amy </li>
        <li> Bob </li>
        <li> Haley </li>
        <li> John </li>
        <li> Kimberly </li>
    </ol>
    */
    dom_addList.appendChild(ol);
}
// innerHTML
function addList2()
{
    /// dynamically add student list by click a button
    var dom_addList = document.querySelector("#addList");
    var txt ="<ol> ";
    for (let s of studentArray)
    {
        txt += "<li> " + s + "</li>";
    }
    txt += "</ol>";
    dom_addList.innerHTML =txt;
}

function changeColor()
{
    var dom_list = document.getElementById("addList");
    dom_list.style.color = "blue";
}

