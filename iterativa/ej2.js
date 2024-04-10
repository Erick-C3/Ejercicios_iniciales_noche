const leer = require("prompt-sync")();

//ej2 imprima 3 veces un mismo mensaje agregando el número de su iteración
//extra: pedir un mensaje en cada iteracion y mostrarlo por terminal



for (let contador = 0; contador < 3; contador++) {
    console.log("Ingresa un mensaje", contador);
    let msjIngresado = leer();
    console.log(msjIngresado);
}