// ChatGPT
const params = new URLSearchParams(window.location.search);
const nom = params.get("nom");

var buttonRetour = document.getElementById("buttonRetour");
buttonRetour.addEventListener("click", function() {
    window.location.href = "index.html";
});