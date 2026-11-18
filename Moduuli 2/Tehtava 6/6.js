function heitaNoppaa() {
    return Math.floor(Math.random() * 6) + 1;
}

let tulos;
let lista = "<ul>";

do {
    tulos = heitaNoppaa();
    lista += "<li>" + tulos + "</li>";
} while (tulos !== 6);

lista += "</ul>";

document.body.innerHTML = lista;