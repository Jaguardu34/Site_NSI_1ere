//Bouton retour
var buttonRetour = document.getElementById("buttonRetour");
buttonRetour.addEventListener("click", function() {
    window.location.href = "index.html";
});

var carroussel = document.getElementById("carroussel")
var carroussel_title = document.getElementById("carroussel_title")
var carroussel_desc = document.getElementById("carroussel_desc")

let carroussel_index = 0;

const carroussel_content = [
    ["Voler plus haut", "Dépasser les nuages et effleurer le ciel comme un oiseau libre"],
    ["Observer la ville", "Voir ses lumières danser au crépuscule, comme des étoiles tombées sur terre."],
    ["Explorer la forêt", "Glisser au-dessus des arbres et écouter le murmure secret des feuilles."],
    ["Survoler la mer", "Suivre les vagues argentées qui brillent au soleil comme des rubans liquides."],
    ["Photographier les montagnes", "Capturer leur majesté silencieuse que seuls les cieux peuvent comprendre."],
    ["Suivre un cours d’eau", "Suivre sa course sinueuse, comme si le drone devenait rivière lui-même."],
    ["Surveiller le désert", "Voir les dunes onduler sous le vent, infinies et paisibles comme des songes."],
    ["Explorer un volcan", "Frôler le feu endormi, témoin fragile de la force de la Terre."],
    ["Observer les oiseaux", "Voler parmi eux et partager, un instant, leur regard sur le monde."],
    ["Surveiller la nuit", "Flotter dans l’obscurité et contempler la ville qui s’endort sous un voile de lumière."]
];


function init_carroussel(){
    carroussel_title.innerHTML = carroussel_content[carroussel_index][0];
    carroussel_desc.innerHTML = carroussel_content[carroussel_index][1];
}

function update_carroussel_plus() {
    carroussel_index += 1;
    if (carroussel_index > carroussel_content.length-1) {
        carroussel_index = 0;
    };
    carroussel_title.innerHTML = carroussel_content[carroussel_index][0];
    carroussel_desc.innerHTML = carroussel_content[carroussel_index][1];
};

function update_carroussel_minus() {
    carroussel_index -= 1;
    if (carroussel_index < 0) {
        carroussel_index = carroussel_content.length -1;
    };
    carroussel_title.innerHTML = carroussel_content[carroussel_index][0];
    carroussel_desc.innerHTML = carroussel_content[carroussel_index][1];
}


window.addEventListener("load", function() {
    init_carroussel();
}, false);