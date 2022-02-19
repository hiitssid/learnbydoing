function book() {
  //selecting and storing value from form html
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let publication = document.getElementById("publication").value;
  let isbn = document.getElementById("isbn").value;
  let genre = document.getElementById("genre").value;

  //title by author button DOM change
  let titleByAuthor = (document.getElementById(
    "titlebyauthor"
  ).textContent = `${title} by ${author}`);

  //author button DOM change
  let authormsg = (document.getElementById("authormsg").textContent = author);

  //publication button DOM change
  let publicationmsg = (document.getElementById("publicationmsg").textContent =
    publication);

  // isbn button DOM change
  let isbnmsg = (document.getElementById("isbnmsg").textContent = isbn);

  //genre button DOM change
  let genremsg = (document.getElementById("genremsg").textContent = genre);

  // in package button DOM change
  let inpackagemsg = (document.getElementById(
    "inpackagemsg"
  ).textContent = `1pc Book x ${title}`);
}

function copyAuthor() {
  let myCopy = document.getElementById("author");
  myCopy.select();
  navigator.clipboard.writeText(myCopy.value);
}

function copyPublication() {
  let myCopy = document.getElementById("publication");
  myCopy.select();
  navigator.clipboard.writeText(myCopy.value);
}

function copyISBN() {
  let myCopy = document.getElementById("isbn");
  myCopy.select();
  navigator.clipboard.writeText(myCopy.value);
}

function copyGenre() {
  let myCopy = document.getElementById("genre");
  myCopy.select();
  navigator.clipboard.writeText(myCopy.value);
}

function copyTitleByAuthor() {
  var copyText = document.getElementById("titlebyauthor");
  var input = document.createElement("textarea");
  input.value = copyText.textContent;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  input.remove();
}
function copyInPackage() {
  var copyText = document.getElementById("inpackagemsg");
  var input = document.createElement("textarea");
  input.value = copyText.textContent;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  input.remove();
}
