//Variables
var shop = document.getElementById("idShop");
var article = document.getElementsByTagName("article");
var button_panier = document.getElementById("btnPanier");
var slider_panier = document.getElementById("slider_panier");
var objectsInPanier = 0;
var val_panier = 0;
var items= "";
var panier = [];

const articles = [
    ["SpeedyBee", "drone1.png", 100],
    ["test2", "singe.gif", 200],
    ["test3", "singe.gif", 300],

];

//json.stringify viens de chatgpt car local storage ne prend pas les tableau
function savePanier() {
    localStorage.setItem("panier", JSON.stringify(panier));
    localStorage.setItem("objectsInPanier", objectsInPanier);
    localStorage.setItem("val_panier", val_panier);
}

function loadPanier() {
    const savedPanier = localStorage.getItem("panier");

    if (savedPanier) {
        panier = JSON.parse(savedPanier);
        objectsInPanier = Number(localStorage.getItem("objectsInPanier")) || 0;
        val_panier = Number(localStorage.getItem("val_panier")) || 0;
    }
}


//Charger les articles
function init(){
    for (let step = 0; step < articles.length; step++) {
        addItems(articles[step][0], articles[step][1], articles[step][2]);
    };
    shop.innerHTML = items;
};

//Creer une div pour article
function addItems(name, image, price) {
    var controls = "";
    controls = "<div class='controls'><button id='btn_acheter&"+name+"'>Acheter</button><button id='btn_ajt_panier&"+name+"'>Ajouter au panier</button></div>";
    items = items+"<article id='art_"+name+"' class='article'><p class='name'>"+name+"</p><img class='img_article' src='/assets/"+image+"'></img><p class='price'>"+parseFloat(price)+"€</p>"+controls+"</article>"
};

//Update nbre panier 
function verifPanier() {
    if (objectsInPanier > 0) {
        document.getElementById("btnPanier").innerHTML = "Panier (" + objectsInPanier + " articles)";
    } else {
        document.getElementById("btnPanier").innerHTML = "Panier";
    }
};

//Ajouter au panier
shop.addEventListener("click", (e) => {
  if (e.target.id.startsWith("btn_ajt_panier&")) {
    name_product = e.target.id.split("&")[1];
    console.log("Ajout au panier de : " + name_product);
    for (let step =0; step <articles.length; step++){
        if (articles[step][0] == name_product) {
            var price = articles[step][2];
            val_panier += price;
        };
    };
    let found = false;
    for (let step =0; step <panier.length; step++){
        if (panier[step][0] == name_product) {
            found = true;
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
    objectsInPanier += 1;
    verifPanier();
    update_panier();
    savePanier();
  }
});


//Envoyer vers page achat
shop.addEventListener("click", (e) => {
  if (e.target.id.startsWith("btn_acheter&")) {
    window.location.href = "info_product.html?nom=" + e.target.id.split("&")[1];
    }
});

//Afficher panier dans le slider
var items_panier = ""
var btn_achat_html = "<button id='btn_achat'>Acheter</button>"
function update_panier() {
    items_panier = ""
    if (panier.length > 0) {
        for (let step = 0; step < panier.length; step++) {
            for (let step_2 = 0; step_2 < articles.length; step_2++){
                if (articles[step_2][0] == panier[step][0]) {
                    addItems_Panier(articles[step_2][0], articles[step_2][1], articles[step_2][2], panier[step][1]);
                };
            };
        };
        slider_panier.innerHTML = "<p id='panier_title'>Votre Panier</p>"+items_panier+btn_achat_html;
    } else {
        slider_panier.innerHTML = "<p id='panier_title'>Votre Panier</p><p style='padding-top: 70%; color: white; text-align: center;'>Vous n'avez rien dans votre panier !</p>"
    }
}

function addItems_Panier(name, image, price, number) {
    var controls = "";
    items_panier = items_panier+"<article id='art_panier"+name+"' class='art_panier'><img class='img_article_panier' src='/assets/"+image+"'></img><p class='name_panier'>"+name+"</p><p class='price_panier'>"+parseFloat(price)+"€</p><p class='number_article_panier'>"+number+"</p><button id='suppr_article' class='suppr_article'>Suppr</button></article>"
};

//Afficher slider panier

var state = false
button_panier.addEventListener("click", function(){
    console.log(panier)
    if (state == false){
        slider_panier.style.transform = "translateX(0)"
        state = true;
        update_panier()
    } else {
        slider_panier.style.transform = "translateX(400px)"
        state = false;
        update_panier()
    }
});

//Supprimer article du panier
slider_panier.addEventListener("click", (e) => {
  if (e.target.classList.contains("suppr_article")) {
    name_product = e.target.parentElement.id.split("art_panier")[1];
    console.log("Suppression de l'article : " + name_product);
    for (let step =0; step <articles.length; step++){
        if (articles[step][0] == name_product) {
            var price = articles[step][2];
            val_panier -= price;
        };
    };
    for (let step =0; step <panier.length; step++){
        if (panier[step][0] == name_product) {
            if (panier[step][1] == 1){
                panier.splice(step, 1);
            } else {
                panier[step][1] -= 1;
            }
        };
    };
    objectsInPanier -= 1;
    verifPanier();
    update_panier();
    savePanier();
  }
});




//viens de https://www.vincent-vanneste.fr/views/javascript/co/chargement.html
window.addEventListener("load", function() {
    loadPanier();
    init();
    verifPanier();
    update_panier();
}, false);




