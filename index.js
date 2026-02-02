var shop = document.getElementById("idShop");
var article = document.getElementsByTagName("article");

var objectsInPanier = 10;

var items = "";

const articles = [
    ["test", "singe.gif", 100],
    ["test2", "singe.gif", 200],
    ["test3", "singe.gif", 300],

];

function init(){
    for (let step = 0; step < articles.length; step++) {
        addItems(articles[step][0], articles[step][1], articles[step][2]);
    };
    shop.innerHTML = items;
};

function addItems(name, image, price) {
    var controls = "";
    controls = "<div class='controls'><button class='btn_achter'>Acheter</button><button class='btn_ajt_panier'>Ajouter au panier</button></div>";
    items = items+"<article id='art_"+name+"' class='article'><p class='name'>"+name+"</p><img class='img_article' src='/assets/"+image+"'></img><p class='price'>"+parseFloat(price)+"€</p>"+controls+"</article>"
};

function verifPanier() {

    if (objectsInPanier > 0) {
        document.getElementById("idPanier").innerHTML = "Panier (" + objectsInPanier + " articles)";
    } else {
        document.getElementById("idPanier").innerHTML = "Panier (vide)";
    }
};


setInterval(verifPanier, 100);

//viens de https://www.vincent-vanneste.fr/views/javascript/co/chargement.html
window.addEventListener("load", init, false);




