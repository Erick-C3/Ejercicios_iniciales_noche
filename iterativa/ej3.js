const leer = require("prompt-sync")();

//ej3 sume 3 números ingresados por consola donde por cada número ingresado debe mostrar el valor del resultado actual o sea en cada iteración

let numIngresado = 0;
let resultadoTotal = 0;

for (let contador = 0; contador < 3; contador++) {
    console.log("Ingresa un numero");
    numIngresado = Number(leer());
    resultadoTotal = numIngresado + resultadoTotal;
    console.log("Resultado total actual:", resultadoTotal);
}