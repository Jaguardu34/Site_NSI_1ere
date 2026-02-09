var list_articles = document.getElementById("list_articles");
var pric = document.getElementById("price");
const articles = [
    ["SpeedyBee", "drone1.png", 100, "Le SpeedyBee est un drone de course rapide et agile, idéal pour les amateurs de sensations fortes. Avec son design aérodynamique et ses moteurs puissants, il offre une expérience de vol exceptionnelle. Que vous soyez un pilote débutant ou expérimenté, le SpeedyBee vous permettra de vivre des aventures palpitantes dans les airs."],
    ["test2", "singe.gif", 200],
    ["test3", "singe.gif", 300],

];

//Recuperer le panier depuis le local storage
function loadPanier() {
    const savedPanier = localStorage.getItem("panier");

    if (savedPanier) {
        panier = JSON.parse(savedPanier);
        objectsInPanier = Number(localStorage.getItem("objectsInPanier")) || 0;
        val_panier = Number(localStorage.getItem("val_panier")) || 0;
    }
}

//Bouton retour
var buttonRetour = document.getElementById("buttonRetour");
buttonRetour.addEventListener("click", function() {
    window.location.href = "index.html";
});


//Afficher les éléments dans le checkout
var items_panier = ""

function init() {
    loadPanier();
    update_list_articles();
};

function update_list_articles() {
    items_panier = ""
    if (panier.length > 0) {
        for (let step = 0; step < panier.length; step++) {
            for (let step_2 = 0; step_2 < articles.length; step_2++){
                if (articles[step_2][0] == panier[step][0]) {
                    addItems_checkout(articles[step_2][0], articles[step_2][1], articles[step_2][2], panier[step][1]);
                };
            };
        };
        list_articles.innerHTML = items_panier;
        price.innerHTML = val_panier+"€";

    }
}

function addItems_checkout(name, image, price, number) {
    items_panier = items_panier+"<article id='art_chackout"+name+"' class='art_checkout'><img class='img_article_checkout' src='/assets/"+image+"'></img><p class='name_checkout'>"+name+"</p><p class='price_checkout'>"+parseFloat(price)+"€</p><p class='number_article_panier'>"+number+"</p><button id='suppr_article' class='suppr_article'>Suppr</button></article>"
};


//viens de https://www.vincent-vanneste.fr/views/javascript/co/chargement.html
window.addEventListener("load", function() {
    init();
}, false);