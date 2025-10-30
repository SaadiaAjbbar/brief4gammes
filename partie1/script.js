
const list = [
    '<img src="images/html.png" alt="html" width="60">',
    '<img src="images/css.png" alt="css" width="60">',
    '<img src="images/js.png" alt="js" width="60">',
    '<img src="images/python.png" alt="python" width="60">',
    '<img src="images/java.png" alt="java" width="60">',
    '<img src="images/php.png" alt="php" width="60">',
    '<img src="images/cpp.png" alt="cpp" width="60">',
    '<img src="images/react.png" alt="react" width="60">',
    '<img src="images/html.png" alt="html" width="60">',
    '<img src="images/css.png" alt="css" width="60">',
    '<img src="images/js.png" alt="js" width="60">',
    '<img src="images/python.png" alt="python" width="60">',
    '<img src="images/java.png" alt="java" width="60">',
    '<img src="images/php.png" alt="php" width="60">',
    '<img src="images/cpp.png" alt="cpp" width="60">',
    '<img src="images/react.png" alt="react" width="60">'
];
list.sort(() => Math.random() - 0.5);

let score = 0;
for (let i = 0; i < list.length; i++) {
    let card = document.createElement('div');
    card.className = 'cardi';
    card.innerHTML = list[i];

    card.onclick = function () {
        this.classList.add('cardiOpen');

        setTimeout(function () {
            //si cliquer(ouvrir) sur plus que un cardi
            if (document.querySelectorAll('.cardiOpen').length > 1) {
                //on compare ci deux cardi ouvriee si sont egal on ajout class dans si deux (cardiOpen) et les nommees "cardiMatch"
                if (document.querySelectorAll('.cardiOpen')[0].innerHTML == document.querySelectorAll('.cardiOpen')[1].innerHTML) {

                    document.querySelectorAll('.cardiOpen')[0].classList.add('cardiMatch');
                    document.querySelectorAll('.cardiOpen')[1].classList.add('cardiMatch');
                    //augmentation de score apres chaque matche cardi
                    score++;
                    document.getElementById('score').textContent = score;

                    //si ona fini tout les card et trouver tous  les matches 
                    if (document.querySelectorAll('.cardiMatch').length == list.length) {
                        alert("BRAVO YOU WIN !!!! \n votre score final est: " + score);
                    }
                    //remove ce nom de deux claqsse "cardiMatch"
                    document.querySelectorAll('.cardiOpen')[0].classList.remove('cardiOpen');
                    document.querySelectorAll('.cardiOpen')[1].classList.remove('cardiOpen');


                } else {
                    //le cas de les deux card opening non matchees on le supprimer les noms de class cardiOpen dans cardi

                    document.querySelectorAll('.cardiOpen')[1].classList.remove('cardiOpen');
                    document.querySelectorAll('.cardiOpen')[0].classList.remove('cardiOpen');

                }

            }
        }, 500)
    }

    document.querySelector(".cards").appendChild(card);

}