const textpara = document.getElementById("textpara");
const input = document.getElementById("input");

//transformer le text textpara au list des char
const textInput = "DOM Gamification: Play the DOM";
const letters = textInput.split("");

function Affiche_textInput() {
  textpara.innerHTML = "";
  letters.forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.dataset.key = char; 
    textpara.appendChild(span);
  });
}

Affiche_textInput();
