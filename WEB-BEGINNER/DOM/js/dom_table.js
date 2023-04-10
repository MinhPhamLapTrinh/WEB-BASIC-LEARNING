/* dom_table.js
    embedded in wk7_dom_table.html
*/
var caption = "Example Caption";
var data=[ ["a11", "a12", "a13", "a14"],
           ["a21", "a22", "a23", "a24"],
           ["a31", "a32", "a33", "a34"]
         ];
function addTable()
{
    var dom_table = document.querySelector("#addTable");
    var table = document.createElement("table");
    var tableCaption = table.createCaption();
    tableCaption.textContent = caption;
    var tr = null, td=null, txt=null;
    for (let i=0; i<data.length; i++)
    {
        tr = document.createElement("tr");
        for (let j=0; j<data[i].length;j++)
        {
            td = document.createElement("td");
            txt = document.createTextNode(data[i][j]);
            td.appendChild(txt);
            td.style.border="1px solid";
            tr.appendChild(td);
        }  // for each data cell
        table.appendChild(tr);
    } // for each row
    table.style.border="1px solid";
    dom_table.appendChild(table);
} //function addTable()


