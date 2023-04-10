var bookList = [
  {
    title: "A Brief History of Time",
    author: "Steve Hawking",
    genre: "Nonfiction",
    description:
      'It addresses questions like "what do we really know about the universe. " ',
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "fantasy",
    description: "Where magic goes",
  },
  {
    title: "Homo Deus - A Brief History of Tomorrow",
    author: "Yuval Noah Harari",
    genre: "Nonfiction",
    description: "It shows us where we are going.",
  },
  {
    title: "Sapiens - A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "Nonfiction",
    description: "It shows us where we came from.",
  },
  {
    title: "You Can Heal Your Life",
    author: "Louise Hay",
    genre: "Nonfiction",
    description:
      "The thougths we think and the words we speak create our experiences.",
  },
  {
    title: "Gone With the Wind",
    author: "Margaret Mitchell",
    genre: "Drama",
    description: "It tells a romantic story during the America Civial War.",
  },
];
function displayBook() {
  var keyword = new RegExp(
    document.getElementById("search").value.toLowerCase()
  );
  var newList = [];
  if (keyword == "") {
    newList = bookList;
  } else {
    for (let keys of bookList) {
      if (keyword.test(keys.title.toLowerCase())) {
        newList.push(keys);
      } else if (keyword.test(keys.author.toLowerCase())) {
        newList.push(keys);
      } else if (keyword.test(keys.genre.toLowerCase())) {
        newList.push(keys);
      } else if (keyword.test(keys.description.toLowerCase())) {
        newList.push(keys);
      }
    }
  }

  var displayBookList = document.querySelector("#displayBook");
  let table = document.createElement("table");
  let thead = table.createTHead();
  let row = thead.insertRow();
  let objData = Object.keys(newList[0]);
  objData = ["Book Title", "Author Name", "Genre", "Description"];
  for (let i = 0; i < objData.length; i++) {
    let th = document.createElement("th");
    let txt = document.createTextNode(objData[i]);
    th.appendChild(txt);
    row.appendChild(th);
    th.style.border = "1px solid";
  }
  for (let element of newList) {
    let tr = table.insertRow();
    for (let keys in element) {
      let cell = tr.insertCell();
      let txt = document.createTextNode(element[keys]);
      cell.appendChild(txt);
      cell.style.border = "1px solid";
    }
  }
  table.style.border = "1px solid";
  displayBookList.appendChild(table);
}
function addBook() {
  var add = document.querySelector("#addBook");
  var title = add.title.value;
  var author = add.author.value;
  var genre = add.genre.value;
  var description = add.description.value;

  var newBook = {
    title: title,
    author: author,
    genre: genre,
    description: description,
  };
  bookList.push(newBook);

  var confirmBook = document.querySelector("#bookAdded");
  var message = `Book "` + title + `" is added to my bookshelf`;
  confirmBook.innerHTML = message;
}
function clearSearch() {
  document.querySelector("#displayBook").innerHTML = "";
  document.querySelector("#search").value = "";
}

function search() {
  displayBook();
}
