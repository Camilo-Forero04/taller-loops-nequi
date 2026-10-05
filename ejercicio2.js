const prompt = require("prompt-sync")();
let intento = prompt("Escribe tu PIN: ");
const PIN_CORRECTO = "1234";
let numeroIntentos = 0;

while(intento!=PIN_CORRECTO){
    intento = prompt("El PIN es incorrecto, vuelve a intentarlo: ");
}

console.log("Bienvenido a Nequi :)");
