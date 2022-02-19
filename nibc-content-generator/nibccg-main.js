function myFunction() {
  let title = document.getElementById("title").value;
  let isbn = document.getElementById("isbn").value;
  let author = document.getElementById("author").value;
  let genre = document.getElementById("genre").value;
  let publication = document.getElementById("publication").value;
  let pages = document.getElementById("pages").value;
  let format = document.getElementById("format").value;
  let language = document.getElementById("language").value;

  let priceinr = document.getElementById("priceinr").value;
  let pricenc = priceinr * 1.6;

  let isbnmsg = document.querySelector(".isbnmsg");
  let titlemsg = document.querySelector(".titlemsg");
  let authormsg = document.querySelector(".authormsg");
  let genremsg = document.querySelector(".genremsg");
  let publicationmsg = document.querySelector(".publicationmsg");
  let pagesmsg = document.querySelector(".pagesmsg");
  let formatmsg = document.querySelector(".formatmsg");
  let languagemsg = document.querySelector(".languagemsg");
  let titleAuthorMsg = document.querySelector(".titleAuthorMsg");
  let inpackagemsg = document.querySelector(".inpackagemsg");
  let pricenrsmsg = document.querySelector(".pricenrsmsg");
  isbnmsg.textContent = document.getElementById("isbn").value;
  //titlemsg.textContent = document.getElementById("title").value;
  authormsg.textContent = document.getElementById("author").value;
  genremsg.textContent = document.getElementById("genre").value;
  publicationmsg.textContent = document.getElementById("publication").value;
  //publicationmsg.textContent = "Om Books International";
  pagesmsg.textContent = document.getElementById("pages").value;
  formatmsg.textContent = document.getElementById("format").value;
  languagemsg.textContent = document.getElementById("language").value;
  titleAuthorMsg.textContent = `${title} by ${author}`;
  inpackagemsg.textContent = `1pc Book x ${title}`;
  pricenrsmsg.textContent = `Price: Rs. ${pricenc}`;
}

function copyISBN() {
  let myCopy = document.getElementById("isbn");
  myCopy.select();
  navigator.clipboard.writeText(myCopy.value);
}
function copyTitle() {
  let myCopy = document.getElementById("title");
  myCopy.select();
  navigator.clipboard.writeText(myCopy.value);
}
function copyAuthor() {
  let myCopy = document.getElementById("author");
  myCopy.select();
  navigator.clipboard.writeText(myCopy.value);
}

function copyGenre() {
  let myCopy = document.getElementById("genre");
  myCopy.select();
  navigator.clipboard.writeText(myCopy.value);
}
function copyPages() {
  let myCopy = document.getElementById("pages");
  myCopy.select();
  navigator.clipboard.writeText(myCopy.value);
}
function copyPublication() {
  let myCopy = document.getElementById("publication");
  myCopy.select();
  navigator.clipboard.writeText(myCopy.value);
}
/*
function copyTitleAuthorMsg() {
  let myCopy = document.getElementById("copy_title_author_msg");
  navigator.clipboard.writeText(myCopy.value);
}
*/

function closeMe() {
  window.opener = self;
  window.close();
}

function reload() {
  window.location.reload();
}

/*
    document.write("ISBN: ", isbn);
    document.write("<br />")
    document.write("Author: ", author);
    document.write("<br />")
    document.write("Genre: ", genre);
    document.write("<br />")
    document.write("Publication: ", publication);
    document.write("<br />")
    document.write("Format: ", format);
    document.write("<br />")
    document.write("Pages: ", pages," pages");
    document.write("<br />")
    document.write("Language: English");
    document.write("<br />")
    document.write("<br />")
    document.write("<br />")
    document.write(title, " by ", author);
    document.write("<br />")
    document.write("<br />")
    document.write("<br />")
    document.write("1pc Book x ", title,);
    */
