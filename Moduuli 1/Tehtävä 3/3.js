'use strict';

const number1 = Number(prompt("Give the first integer:"));
const number2 = Number(prompt("Give the second integer:"));
const number3 = Number(prompt("Give the third integer:"));

const sum = number1 + number2 + number3;
const product = number1 * number2 * number3;
const average = (number1 + number2 + number3) / 3;

document.querySelector("#target").innerHTML =
    `Sum ${sum}<br>
     Product ${product}<br>
     Average ${average}`;