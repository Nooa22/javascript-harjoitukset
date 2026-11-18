function heitaNoppaa(sivut) {
    return Math.floor(Math.random() * sivut) + 1;
}

let maksimi = Number(prompt("Kuinka monta sivua nopassa on?"));

let tulos;
let lista = "<ul>";

do {
    tulos = heitaNoppaa(maksimi);
    lista += "<li>" + tulos + "</li>";
} while (tulos !== maksimi);

lista += "</ul>";

document.body.innerHTML = lista;