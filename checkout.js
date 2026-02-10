var list_articles = document.getElementById("list_articles");
var pric = document.getElementById("price");
var container = document.getElementById("container");
var panier = [];
var val_panier = 0;
var objectsInPanier = 0;

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

//Recuperer le panier depuis le local storage
function loadPanier() {
    const savedPanier = localStorage.getItem("panier");

    if (savedPanier) {
        panier = JSON.parse(savedPanier);
        objectsInPanier = Number(localStorage.getItem("objectsInPanier")) || 0;
        val_panier = Number(localStorage.getItem("val_panier")) || 0;
    }
}

function savePanier() {
    localStorage.setItem("panier", JSON.stringify(panier));
    localStorage.setItem("objectsInPanier", objectsInPanier);
    localStorage.setItem("val_panier", val_panier);
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
    update_price()
};

//update les divs des articles
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

//ajouter les divs des articles
var controls = ""
function addItems_checkout(name, image, price, number) {
    var controls = "<div class='controls' id='controls_"+name+"'><button class='minus'>-</button><p class='number'>"+number+"</p><button class='plus'>+</button></div>"
    items_panier = items_panier+"<article id='art_checkout"+name+"' class='art_checkout'><img class='img_article_checkout' src='/assets/"+image+"'></img><p class='name_checkout'>"+name+"</p><p class='price_checkout'>"+parseFloat(price)+"€</p>"+controls+"</article>"
};

//ajouter/supprimer un article
container.addEventListener("click", (e) => {
    loadPanier();
    if (e.target.classList.contains("minus")) {
        name_product = e.target.parentElement.id.split("controls_")[1];
        if (panier.length === 1 && panier[0][1] === 1) {
            window.location.href="index.html"
        } else {
            for (let step =0; step <panier.length; step++){
                if (panier[step][0] == name_product) {
                    if (panier[step][1] == 1){
                        panier.splice(step, 1);
                    } else {
                        panier[step][1] -= 1;
                    }
                };
            };
        };
    }
    if (e.target.classList.contains("plus")) {
        name_product = e.target.parentElement.id.split("controls_")[1];
        if (panier.length === 1 && panier[0][1] === 1) {
            window.location.href="index.html"
        } else {
            for (let step =0; step <panier.length; step++){
                if (panier[step][0] == name_product) {
                    panier[step][1] += 1;
                };
            };   
        };
    }
    update_price();
    savePanier();
    update_list_articles();

})


//viens de https://www.vincent-vanneste.fr/views/javascript/co/chargement.html
window.addEventListener("load", function() {
    init();
}, false);