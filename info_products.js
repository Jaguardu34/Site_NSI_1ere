// ChatGPT
const params = new URLSearchParams(window.location.search);
const nom = params.get("nom");

var name_article = document.getElementById("name");
var price = document.getElementById("price");
var desc = document.getElementById("desc");
var img = document.getElementById("img");

const articles = [
    ["SpeedyBee", "drone1.png", 100, "Le SpeedyBee est un drone de course rapide et agile, idéal pour les amateurs de sensations fortes. Avec son design aérodynamique et ses moteurs puissants, il offre une expérience de vol exceptionnelle. Que vous soyez un pilote débutant ou expérimenté, le SpeedyBee vous permettra de vivre des aventures palpitantes dans les airs."],
    ["test2", "singe.gif", 200],
    ["test3", "singe.gif", 300],

];


//Btn retour
var buttonRetour = document.getElementById("buttonRetour");
buttonRetour.addEventListener("click", function() {
    window.location.href = "index.html";
});


function init() {
    for(let step = 0; step < articles.length; step ++){
        if (articles[step][0] == nom) {
            name_article.innerHTML=articles[step][0];
            img.innerHTML="<img class='img_article' src='/assets/"+articles[step][1]+"'></img>"
            price.innerHTML=articles[step][2]+"€";
            if (articles[step][3] != null) {
                desc.innerHTML=articles[step][3]
            } else {
                desc.innerHTML="Il n'y a pas de déscription disponibles pour cet article"
            }

        };
    };


};



//viens de https://www.vincent-vanneste.fr/views/javascript/co/chargement.html
window.addEventListener("load", function() {
    init();
}, false);