function add()
{
    var conainer = document.querySelector("#container");
    var newP = document.createElement("p");
    var newText = document.createTextNode("This is a new paragraph");
    newP.appendChild(newText);
    // <p> This is a new paragraph </p>
    container.appendChild(newP);
    //<div>....<p> This is a new paragraph </p> </div>
    //document.querySelector("body").appendChild(newP);
}

function insert()
{
    var container = document.querySelector("#container");
    var newP = document.createElement("p");
    var newText = document.createTextNode("This is a new paragraph");
    newP.appendChild(newText);

    var oldElement = document.querySelector("#h3")
    container.insertBefore(newP, oldElement);
}

function remove()
{
    var container = document.querySelector("#container");
    var p2 = document.querySelector("#p2");
    container.removeChild(p2);
}