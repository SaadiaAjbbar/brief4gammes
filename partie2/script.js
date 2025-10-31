//
const textpara = document.getElementById("textpara");
const input = document.getElementById("input");
let score = 0;
let time = 0;
let wpm = 0;
let taux_precision =0;

// le text de input qui existe dans textpara (affiche deja)
const textInput = "JS est un langage de programmation polyvalent utilise pour rendre les pages web interactives, mais aussi pour creer des applications web (frontend et backend)";

//transformer le text textpara au list des char
const caracteres = textInput.split("");

function Affiche_textInput() {
  textpara.innerHTML = "";

  caracteres.forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.dataset.key = char;
    textpara.appendChild(span);
  });
}
Affiche_textInput();

//


let spans = document.querySelectorAll("span[data-key]");
let i = 0;
let FinichCor = 0;
window.addEventListener('keydown', (e) => {
  //console.log(e.key);
  if (e.key == "Backspace" && i != 0) {
    spans[i - 1].classList.remove('correct');
    spans[i - 1].classList.remove('incorrect');
    if(score >0){
      score--;
    }
    
    i--;
  } else if (e.key.length == 1) {

    if (e.key == spans[i].innerText) {
      spans[i].classList.add('correct');
      score++;
      i++;
    } else {
      spans[i].classList.add('incorrect');
     
      i++;
    }
  }
  document.getElementById("score").innerText = score;



});

//gestion temps

function startChrono() {
  let timer = setInterval(() => {
    time++;
    document.getElementById("timer").innerText = time;

    if (i >= spans.length) {
      wpm=(spans.length/5)/(time/60);
      taux_precision=(score/spans.length)*100;
      alert(`votre score final  est :${score} \n  votre vitesse :${wpm} wpm \n taux de precision :${taux_precision} %  `);
      clearInterval(timer);
      window.location.reload();
    }
  }, 1000);

  window.removeEventListener('keydown', startChrono);
}

window.addEventListener('keydown', startChrono);