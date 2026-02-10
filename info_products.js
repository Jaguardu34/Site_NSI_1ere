// ChatGPT
const params = new URLSearchParams(window.location.search);
const nom = params.get("nom");

var name_article = document.getElementById("name");
var price = document.getElementById("price");
var desc = document.getElementById("desc");
var img = document.getElementById("img");

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