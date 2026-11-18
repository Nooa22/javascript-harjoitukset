let numerot = [];

while (true) {
    let numero = Number(prompt("Syötä numero (0 lopettaa):"));

    if (numero === 0) {
        break;
    }

    numerot.push(numero);
}

numerot.sort((a, b) => b - a);

for (let i = 0; i < numerot.length; i++) {
    console.log(numerot[i]);
}