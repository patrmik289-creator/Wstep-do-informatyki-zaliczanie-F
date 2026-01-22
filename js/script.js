const ciekawostki = [
    "DNA człowieka ma długość około 2 metrów.",
    "Ludzkie DNA jest w 99,9% identyczne u wszystkich ludzi.",
    "Chromosomy są najlepiej widoczne podczas podziału komórki.",
    "Sekwencjonowanie DNA pozwoliło poznać genom człowieka.",
    "Niektóre bakterie potrafią wymieniać się DNA."
];

function pokazCiekawostke() {
    const losowa =
        ciekawostki[Math.floor(Math.random() * ciekawostki.length)];
    document.getElementById("ciekawostka").textContent = losowa;
}
