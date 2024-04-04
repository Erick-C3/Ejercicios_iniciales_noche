const leer = require("prompt-sync")();

// reciba un número y muestre el doble por consola

console.log("Ingresa un numero para duplicarlo");
let numIngresado = Number(leer());
console.log(typeof numIngresado);
console.log("Numero duplicado es:", 2+numIngresado);