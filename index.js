var shop = document.getElementById("idShop");
var article = document.getElementsByTagName("article");


var objectsInPanier = 0;
var val_panier = 0;

var items= "";

const articles = [
    ["test", "singe.gif", 100],
    ["test2", "singe.gif", 200],
    ["test3", "singe.gif", 300],

];

var panier = [];

function init(){
    for (let step = 0; step < articles.length; step++) {
        addItems(articles[step][0], articles[step][1], articles[step][2]);
    };
    shop.innerHTML = items;
};

function addItems(name, image, price) {
    var controls = "";
    controls = "<div class='controls'><button id='btn_acheter&"+name+"'>Acheter</button><button id='btn_ajt_panier&"+name+"'>Ajouter au panier</button></div>";
    items = items+"<article id='art_"+name+"' class='article'><p class='name'>"+name+"</p><img class='img_article' src='/assets/"+image+"'></img><p class='price'>"+parseFloat(price)+"€</p>"+controls+"</article>"
};

function verifPanier() {

    if (objectsInPanier > 0) {
        document.getElementById("btnPanier").innerHTML = "Panier (" + objectsInPanier + " articles)";
    } else {
        document.getElementById("btnPanier").innerHTML = "Panier";
    }
};

shop.addEventListener("click", (e) => {
  if (e.target.id.startsWith("btn_ajt_panier&")) {
    name_product = e.target.id.split("&")[1];
    console.log("Ajout au panier de : " + name_product);
    for (let step =0; step <article.length; step++){
        if (articles[step][0] == name_product) {
            var price = articles[step][2];
            val_panier += price;
        };
    };
    for (let step =0; step <panier.length; step++){
        if (panier[step][0] == name_product) {
            var found = true;
        };
    };
    if (found == true) {
        for (let step =0; step <panier.length; step++){
            if (panier[step][0] == name_product) {
                panier[step][1] += 1;
            }
        };
    } else {
        panier.push([name_product, 1]);
    };
    console.log(panier);
    objectsInPanier += 1;
    verifPanier();
  }
});



shop.addEventListener("click", (e) => {
  if (e.target.id.startsWith("btn_acheter&")) {
    window.location.href = "info_product.html?nom=" + e.target.id.split("&")[1];
    }
});


//viens de https://www.vincent-vanneste.fr/views/javascript/co/chargement.html
window.addEventListener("load", function() {
    init();
    verifPanier();
}, false);




