// ChatGPT
const params = new URLSearchParams(window.location.search);
const nom = params.get("nom");

const articles = [
    ["SpeedyBee", "drone1.png", 100, "Le SpeedyBee est un drone de course rapide et agile, idéal pour les amateurs de sensations fortes. Avec son design aérodynamique et ses moteurs puissants, il offre une expérience de vol exceptionnelle. Que vous soyez un pilote débutant ou expérimenté, le SpeedyBee vous permettra de vivre des aventures palpitantes dans les airs."],
    ["test2", "singe.gif", 200],
    ["test3", "singe.gif", 300],

];

var buttonRetour = document.getElementById("buttonRetour");
buttonRetour.addEventListener("click", function() {
    window.location.href = "index.html";
});


//viens de https://www.vincent-vanneste.fr/views/javascript/co/chargement.html
window.addEventListener("load", function() {
    init();
    verifPanier();
}, false);