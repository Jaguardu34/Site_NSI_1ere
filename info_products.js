// ChatGPT
const params = new URLSearchParams(window.location.search);
const nom = params.get("nom");

var name_article = document.getElementById("name");
var price = document.getElementById("price");
var desc = document.getElementById("desc");
var img = document.getElementById("img");
var battery = document.getElementById("battery");
var flight_time = document.getElementById("flight_time");
var range = document.getElementById("range");
var top_speed = document.getElementById("top_speed")

const articles = [
    ["SkyRaptor", "drone2.jpg", 350, "Le SkyRaptor est un drone de haute précision conçu pour les acrobaties et la vitesse. Son cadre léger et ses moteurs performants garantissent une maniabilité exceptionnelle pour tous les pilotes.", ["4000mah", "10min", "500m", "30km/h"]],
    ["AeroFalcon", "drone3.jpg", 420, "AeroFalcon combine puissance et autonomie. Parfait pour les vols longue distance et les prises de vue aériennes, il offre un contrôle précis même par vent fort.", ["5200mah", "18min", "1200m", "45km/h"]],
    ["ThunderWing", "drone4.jpg", 280, "ThunderWing est un drone compact et rapide, idéal pour les courses et les manœuvres rapides. Son design moderne et ses fonctionnalités intuitives séduisent les débutants comme les experts.", ["3000mah", "8min", "400m", "55km/h"]],
    ["NimbusX", "drone5.jpg", 500, "NimbusX est équipé de la dernière technologie de stabilisation pour des vidéos fluides et des vols stables. Son autonomie prolongée en fait le compagnon idéal pour les explorateurs du ciel.", ["6000mah", "22min", "1500m", "40km/h"]],
    ["VoltSky", "drone6.jpg", 320, "VoltSky est un drone agile et réactif, conçu pour les pilotes qui aiment la vitesse et les figures aériennes. Léger et robuste, il assure des performances exceptionnelles.", ["3800mah", "11min", "600m", "60km/h"]],
    ["FalconEye", "drone7.jpg", 450, "FalconEye est le choix parfait pour la photographie aérienne et la cartographie. Ses capteurs avancés et sa caméra HD permettent de capturer des images d'une clarté impressionnante.", ["5500mah", "20min", "1300m", "38km/h"]], 
    ["AeroPulse", "drone8.jpg", 370, "AeroPulse offre un excellent équilibre entre vitesse et maniabilité. Son design aérodynamique et ses contrôles intuitifs en font un drone très agréable à piloter.", ["4200mah", "14min", "800m", "48km/h"]],
    ["SkyViper", "drone9.jpg", 390, "SkyViper est conçu pour les courses et les acrobaties. Rapide et précis, il est idéal pour ceux qui veulent repousser leurs limites dans le ciel.", ["4500mah", "12min", "900m", "65km/h"]],
];


//Btn retour
var buttonRetour = document.getElementById("buttonRetour");
buttonRetour.addEventListener("click", function() {
    window.location.href = "index.html";
});


function init() {
    const caracteristic = ["Batterie : ", "Temps de vol : ", "Portée : ", "Vitesse max : "]
    for(let step = 0; step < articles.length; step ++){
        if (articles[step][0] == nom) {
            name_article.innerHTML=articles[step][0];
            img.innerHTML="<img class='img_article' src='/assets/"+articles[step][1]+"'></img>"
            price.innerHTML=articles[step][2]+"€";
            if (articles[step][3] != null) {
                desc.innerHTML=articles[step][3]
            } else {
                desc.innerHTML="Il n'y a pas de déscription disponibles pour cet article"
            };
            if (articles[step].length === 5) {
                battery.innerHTML = caracteristic[0] + articles[step][4][0];
                flight_time.innerHTML = caracteristic[1] + articles[step][4][1];
                range.innerHTML = caracteristic[2] + articles[step][4][2];
                top_speed.innerHTML = caracteristic[3] + articles[step][4][3];
            };

        };
    };


};



//viens de https://www.vincent-vanneste.fr/views/javascript/co/chargement.html
window.addEventListener("load", function() {
    init();
}, false);