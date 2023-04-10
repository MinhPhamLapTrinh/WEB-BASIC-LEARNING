/* window.onload= function(){
    var elem = document.querySelector("#myBtn"); 

    elem.addEventListener( "click", displayDate ); // or the following two solutions
    // elem.onclick = displayDate;  // note: no "( )"
    //  elem.onclick = function () { displayDate(); };    
};

function displayDate() {
     document.querySelector("#demo").innerHTML = (new Date()).toLocaleString(); 
} */

window.onload = function(){
    var elem = document.querySelector("#myBtn");
    elem.addEventListener("click", function(){
        document.querySelector("#demo").innerHTML = (new Date()).toLocaleString(); 
    });
};