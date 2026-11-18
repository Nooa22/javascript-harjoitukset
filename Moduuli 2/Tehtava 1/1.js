let numerot = [];

for (let i = 0; i < 5; i++) {
    let numero = Number(prompt("Anm numero:"));
    numerot.push(numero);
}

console.log("Numerot käänteisessä järjestyksessä:");

for (let i = 4; i >= 0; i--) {
    console.log(numerot[i]);
}