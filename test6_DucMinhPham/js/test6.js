function showLogo() {
  var divObj = document.querySelector("#show");
  divObj.innerHTML =
    '<img src="media/seneca-logo (1).svg" alt="senecalogo" width="200" height="100">';
}

function addList() {
  var users = [
    {
      first_name: "Kaitlin",
      last_name: "Burns",
      age: 23,
      email: "kburns99753@usermail.com",
    },
    {
      first_name: "Joshua",
      last_name: "Feir",
      age: 31,
      email: "josh319726@usermail.com",
    },
  ];
  var divObj = document.querySelector("#add");
  var newHeader = document.createElement("h2");

  var newTxt = document.createTextNode("StudentList");
  newHeader.appendChild(newTxt);

  divObj.appendChild(newHeader);

  var divObj = document.querySelector("#add");
  var ul = document.createElement("ul");

  var li = null,
    li_text = null;
  for (var i = 0; i < users.length; i++) {
    li = document.createElement("li");
    li_text = document.createTextNode(
      users[i].first_name +
        " " +
        users[i].last_name +
        ", " +
        users[i].age +
        ", " +
        users[i].email
    );
    li.appendChild(li_text);
    ul.appendChild(li);
  }
  divObj.appendChild(ul);
}

function bingo() {
  var domObj = document.querySelector("#dom1");
    domObj.innerHTML = "Bingo";
    domObj.style.color = "#c634eb";
    domObj.style.backgroundColor = "rgb(66, 245, 209)";
}
