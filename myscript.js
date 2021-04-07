var yourName = prompt("Come ti chiami?");

var yourSurname = prompt("Qual è il tuo cognome?");

var yourFavColour = prompt("Qual è il tuo colore preferito?");


console.log(yourName + yourSurname + yourFavColour + 21);

var myPassword = yourName + yourSurname + yourFavColour + 21;

document.getElementById("pw-gen").innerHTML = myPassword;