//
const textpara = document.getElementById("textpara");
const input = document.getElementById("input");

// le text de input qui existe dans textpara (affiche deja)
const textInput = "DOM Gamification: Play the DOM";

//transformer le text textpara au list des char
const letters = textInput.split("");

//Affichage textInput sous form des span dans   textpara 
function Affiche_textInput() {

//on vide le paragraph chaque fois apres termine de jeux
  textpara.innerHTML = "";

  //loper sur chaque charactere dans textInput
  letters.forEach((char) => {
    //creation de span contient le char avec key=char et poser ce span dans textpara avec appendchild
    const span = document.createElement("span");
    span.textContent = char;
    span.dataset.key = char; 
    textpara.appendChild(span);
  });
}
//appel de fonction Affiche_textInput
Affiche_textInput();

