const prompt = require("prompt-sync")();
let opc;

do{
    console.log(`
        1) Ver saldo
        2) Enviar dinero
        3) Recargar
        4) Salir
    `);
    opc = prompt("> ");  
    if(opc == "1"){
        console.log("Imprimiendo saldo...");
    }else if(opc == "2"){
        console.log("Enviando dinero...");
    }else if(opc == "3"){
        console.log("Recargando dinero...");
    }else if(opc == "4"){
        console.log("Adios :)");
    }else{
        console.log("Escoge una opcion valida");
    }
}while(opc !="4");