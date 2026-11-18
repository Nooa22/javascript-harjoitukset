function concat(taulukko) {
    let teksti = "";

    for (let i = 0; i < taulukko.length; i++) {
        teksti += taulukko[i];
    }

    return teksti;
}

let nimet = ["Johnny", "DeeDee", "Joey", "Marky"];

let tulos = concat(nimet);

document.body.innerHTML = tulos;