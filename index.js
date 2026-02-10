//Variables
var shop = document.getElementById("idShop");
var article = document.getElementsByTagName("article");
var button_panier = document.getElementById("btnPanier");
var slider_panier = document.getElementById("slider_panier");
var body = document.getElementsByName("body");
var objectsInPanier = 0;
var val_panier = 0;
var items= "";
var panier = [];

const articles = [
    ["SkyRaptor", "drone2.jpg", 350, "Le SkyRaptor est un drone de haute précision conçu pour les acrobaties et la vitesse. Son cadre léger et ses moteurs performants garantissent une maniabilité exceptionnelle pour tous les pilotes."],
    ["AeroFalcon", "drone3.jpg", 420, "AeroFalcon combine puissance et autonomie. Parfait pour les vols longue distance et les prises de vue aériennes, il offre un contrôle précis même par vent fort."],
    ["ThunderWing", "drone4.jpg", 280, "ThunderWing est un drone compact et rapide, idéal pour les courses et les manœuvres rapides. Son design moderne et ses fonctionnalités intuitives séduisent les débutants comme les experts."],
    ["NimbusX", "drone5.jpg", 500, "NimbusX est équipé de la dernière technologie de stabilisation pour des vidéos fluides et des vols stables. Son autonomie prolongée en fait le compagnon idéal pour les explorateurs du ciel."],
    ["VoltSky", "drone6.jpg", 320, "VoltSky est un drone agile et réactif, conçu pour les pilotes qui aiment la vitesse et les figures aériennes. Léger et robuste, il assure des performances exceptionnelles."],
    ["FalconEye", "drone7.jpg", 450, "FalconEye est le choix parfait pour la photographie aérienne et la cartographie. Ses capteurs avancés et sa caméra HD permettent de capturer des images d'une clarté impressionnante."],
    ["AeroPulse", "drone8.jpg", 370, "AeroPulse offre un excellent équilibre entre vitesse et maniabilité. Son design aérodynamique et ses contrôles intuitifs en font un drone très agréable à piloter."],
    ["SkyViper", "drone9.jpg", 390, "SkyViper est conçu pour les courses et les acrobaties. Rapide et précis, il est idéal pour ceux qui veulent repousser leurs limites dans le ciel."],
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

//update prix total
function update_price() {

    val_panier = 0;
    if (panier.length > 0) {
        for (let step = 0; step < panier.length; step++) {
            const name = panier[step][0];
            const quantity = panier[step][1];
            for (let step = 0; step < articles.length; step++) {
                if (name == articles[step][0]){
                    val_panier += articles[step][2] * quantity
                };
            };
            
        };
    };
    savePanier();

}

//Charger les articles
function init(){
    for (let step = 0; step < articles.length; step++) {
        if (articles[step][3] == undefined) {
            articles[step][3] = "Aucune description disponible pour cet article.";
        };
        addItems(articles[step][0], articles[step][1], articles[step][2], articles[step][3]);
    };
    shop.innerHTML = items;
};

//Creer une div pour article
function addItems(name, image, price, desc) {
    var controls = "";
    controls = "<div class='controls'><button id='btn_acheter&"+name+"'>Infos</button><button id='btn_ajt_panier&"+name+"'>Ajouter au panier</button></div>";
    items = items+"<article id='art_"+name+"' class='article'><p class='art_name'>"+name+"</p><img class='img_article' src='/assets/"+image+"'><p class='desc_article'>"+desc+"</p></img><p class='art_price'>"+parseFloat(price)+"€</p>"+controls+"</article>"
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
    update_price();
    verifPanier();
    update_panier();
    savePanier();
    calc_nbr_art_panier();
  }
});

//Quitter la slider panier quand clic autre part que le panier
window.addEventListener("click", function(event) {
    if (!slider_panier.contains(event.target) && event.target.id !== "btnPanier" && !event.target.classList.contains("suppr_article")) {
        slider_panier.style.transform = "translateX(400px)";
        state = false;
        update_panier();
    }
});


//Envoyer vers page infos_produit depuis la boutique
shop.addEventListener("click", (e) => {
  if (e.target.id.startsWith("btn_acheter&")) {
    window.location.href = "info_product.html?nom=" + e.target.id.split("&")[1];
    }
});

//Envoyer vers page achat depuis le panier
slider_panier.addEventListener("click", (e) => {
  if (e.target.id == "btn_achat") {
    window.location.href = "checkout.html";
    }
});

//Afficher panier dans le slider
var items_panier = ""
var total_price = "<p id='total_price'>--<p>"
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
        slider_panier.innerHTML = "<p id='panier_title'>Votre Panier</p>"+items_panier+btn_achat_html+"<p id='total_price'>Total: "+val_panier+" €</p>";
    } else {
        slider_panier.innerHTML = "<p id='panier_title'>Votre Panier</p><p style='padding-top: 70%; color: white; text-align: center;'>Vous n'avez rien dans votre panier !</p>";
    }
}

function addItems_Panier(name, image, price, number) {
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
        calc_nbr_art_panier();
    } else {
        slider_panier.style.transform = "translateX(400px)"
        state = false;
        update_panier()
        calc_nbr_art_panier();
    }
});

//Supprimer article du panier
slider_panier.addEventListener("click", (e) => {
  if (e.target.classList.contains("suppr_article")) {
    name_product = e.target.parentElement.id.split("art_panier")[1];
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
    update_price();
    verifPanier();
    update_panier();
    savePanier();
    calc_nbr_art_panier();
  }
});

//update nbr_art_panier
function calc_nbr_art_panier() {
    loadPanier();
    objectsInPanier = 0
    for(let step = 0; step < panier.length; step++){
        objectsInPanier += panier[step][1];
    };
    savePanier();
};




//viens de https://www.vincent-vanneste.fr/views/javascript/co/chargement.html
window.addEventListener("load", function() {
    loadPanier();
    init();
    update_price();     
    update_panier();    
    verifPanier();
    calc_nbr_art_panier();
}, false);




