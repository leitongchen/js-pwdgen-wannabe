var nome = prompt("Come ti chiami?");

var cognome = prompt("Qual è il tuo cognome?");

var colorePreferito = prompt("Qual è il tuo colore preferito?");


console.log(nome + cognome + colorePreferito + 21);

var myPassword = nome + cognome + colorePreferito + 21;

document.getElementById("password-container").innerHTML = "Questa è la tua nuova password <br> <strong>" + myPassword + "</strong> <br> Conservala con cura."