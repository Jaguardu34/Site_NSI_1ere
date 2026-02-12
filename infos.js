//Bouton retour
var buttonRetour = document.getElementById("buttonRetour");
buttonRetour.addEventListener("click", function() {
    window.location.href = "index.html";
});

var carroussel = document.getElementById("carroussel")
var carroussel_title = document.getElementById("carroussel_title")
var carroussel_desc = document.getElementById("carroussel_desc")
var video_carroussel = document.getElementById("video_src")
var video = document.getElementById("video")

let carroussel_index = 0;

const carroussel_content = [
    ["Voler plus haut", "Dépasser les nuages et effleurer le ciel comme un oiseau libre", "carroussel1.mp4"],
    ["Observer la ville", "Voir ses lumières danser au crépuscule, comme des étoiles tombées sur terre.", "carroussel2.mp4"],
    ["Explorer la forêt", "Glisser au-dessus des arbres et écouter le murmure secret des feuilles.", "carroussel3.mp4"],
    ["Survoler la mer", "Suivre les vagues argentées qui brillent au soleil comme des rubans liquides.", "carroussel4.mp4"],
    ["Photographier les montagnes", "Capturer leur majesté silencieuse que seuls les cieux peuvent comprendre.", "carroussel5.mp4"],
    ["Suivre un cours d’eau", "Suivre sa course sinueuse, comme si le drone devenait rivière lui-même.", "carroussel6.mp4"],
    ["Surveiller le désert", "Voir les dunes onduler sous le vent, infinies et paisibles comme des songes.", "carroussel7.mp4"],
    ["Explorer un volcan", "Frôler le feu endormi, témoin fragile de la force de la Terre.", "carroussel8.mp4"],
    ["Observer les oiseaux", "Voler parmi eux et partager, un instant, leur regard sur le monde.", "carroussel9.mp4"],
    ["Surveiller la nuit", "Flotter dans l’obscurité et contempler la ville qui s’endort sous un voile de lumière.", "carroussel10.mp4"]
];


function init_carroussel(){
    carroussel_title.innerHTML = carroussel_content[carroussel_index][0];
    carroussel_desc.innerHTML = carroussel_content[carroussel_index][1];
    if (carroussel_content[carroussel_index].length != 2) {
        video_carroussel.src = "assets/"+carroussel_content[carroussel_index][2];
        video.load();
        video.play();
    } else {
        video_carroussel.src = "assets/checkout_background.mp4";
        video.load();
        video.play();
    };
}

function update_carroussel_plus() {
    carroussel_index += 1;
    if (carroussel_index > carroussel_content.length-1) {
        carroussel_index = 0;
    };
    carroussel_title.innerHTML = carroussel_content[carroussel_index][0];
    carroussel_desc.innerHTML = carroussel_content[carroussel_index][1];
    if (carroussel_content[carroussel_index].length != 2) {
        video_carroussel.src = "assets/"+carroussel_content[carroussel_index][2];
        video.load();
        video.play();
    } else {
        video_carroussel.src = "assets/checkout_background.mp4";
        video.load();
        video.play();
    };
};

function update_carroussel_minus() {
    carroussel_index -= 1;
    if (carroussel_index < 0) {
        carroussel_index = carroussel_content.length -1;
    };
    if (carroussel_content[carroussel_index].length != 2) {
        video_carroussel.src = "assets/"+carroussel_content[carroussel_index][2];
        video.load();
        video.play();
    } else {
        video_carroussel.src = "assets/checkout_background.mp4";
        video.load();
        video.play();
    };
    carroussel_title.innerHTML = carroussel_content[carroussel_index][0];
    carroussel_desc.innerHTML = carroussel_content[carroussel_index][1];
}


window.addEventListener("load", function() {
    init_carroussel();
}, false);