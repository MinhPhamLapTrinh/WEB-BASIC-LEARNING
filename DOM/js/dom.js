/*<script> do not need this HTML tag 
in external file dom.js
*/

function clickMe()
{
    var x = 10;
    alert("Hello." + x);
}

// define a stud obj, with attribute/property name, id
//var stud = {name: "Luca", id: 1001}; // literal notation

// emphasize concept: function is an object, is a value
var changeH3 = function(){
    // get the reference to heading 3 by id: head3, 
    // return the ref to obj heading 3
    var elemH3 = document.querySelector("#head3");
    elemH3.innerHTML = "Welcome Everyone!"
}

function addList()
{
    // get the reference to obj/elem by id: addList, 
    // return the ref to obj div
   // var elemDiv = document.getElementById("addList");
    var elemDiv = document.querySelector("#addList");
    var elemUL = document.createElement('ul');
    var li=null, li_text=null;
    var i=0;
    var fruitList = ["apple", "banana","grape"];
    for (i=0; i<3; i++)
    {
        li =  document.createElement('li');
        li_text = document.createTextNode(fruitList[i]);
        li.appendChild(li_text);
        elemUL.appendChild(li);
    }
    elemDiv.appendChild(elemUL);
}

 function addList2()
{
    // get the reference to obj/elem by id: addList, 
    // return the ref to obj div
   // var elemDiv = document.getElementById("addList");
    var elemDiv = document.querySelector("#addList");
    elemDiv.innerHTML = " <ul> <li> apple </li> <li> banana </li>  <li> grape </li>  </ul>";
}
 


/*    </script> */