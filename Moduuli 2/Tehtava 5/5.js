let numerot = [];

while (true) {
    let numero = Number(prompt("Syötä numero:"));

    if (numerot.includes(numero)) {
        alert("Numero on jo annettu!");
        break;
    }

    numerot.push(numero);
}

numerot.sort((a, b) => a - b);

console.log("Annetut numerot pienimmästä suurimpaan:");

for (let i = 0; i < numerot.length; i++) {
    console.log(numerot[i]);
}