const leer = require("prompt-sync")();

const PALABREA_SECRETA = "trayecto";//variable que no cambia en tiempo de ejecucion
//reciba una palabra y verifique si adivino la que está en el programa
const PALABREA_SECRETA_2 = "TRAYECTO";

console.log("Intenta adivinar la palabra secreta");
let palabraIngresada = leer();
/* console.log("Ingresaste", palabraIngresada); */
if ( palabraIngresada == PALABREA_SECRETA  /* ||  palabraIngresada == PALABREA_SECRETA_2 */) {
    console.log("Adivinaste! ganaste 100 pesos!");
}else if( palabraIngresada == PALABREA_SECRETA_2){
    console.log("Adivinaste! ganaste 50 pesos!");
}else{
    console.log("Perdiste! :(");
}