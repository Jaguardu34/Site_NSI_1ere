function loadPanier() {
    const savedPanier = localStorage.getItem("panier");

    if (savedPanier) {
        panier = JSON.parse(savedPanier);
        objectsInPanier = Number(localStorage.getItem("objectsInPanier")) || 0;
        val_panier = Number(localStorage.getItem("val_panier")) || 0;
    }
}