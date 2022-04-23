
//selecting button with ID
let button = document.getElementById("generatebtn");
//selecting Password display area with Class
let passMsg = document.querySelector(".result");
//adding click event chatcher and executeing function
let generate = button.addEventListener("click",function(e){
    let character = "ABCDEFGHIJK12345LMNOPQRSTUVWXYZ1234567890abcdefghijk67890lmnopqrstuvwxyz~!@#$%^&*()_+{}[]<>,.?/";
    
    let rand = []; //a container for all password characters; an array
    for(let i=0;i<8;i++){
        rand.push(character[Math.floor(Math.random()*character.length)]); //pushing 8 characters to array 
    }
    passMsg.textContent = rand.join(""); //joining or concat the elements of array to form a string


    console.log(rand.join(""));
});