let movimientos = [0, 0, 100000, -50000, 2000000, -500000, 10000000, -8000000];
let posicionEncontrada;
let pagoComercio = 100000;
for(let i=0; i<=movimientos.length-1;i++){
    if(movimientos[i] == 0){
        continue;
    }
    if(movimientos[i]>0){
        console.log("El primer pago a un comercio fue de: ", movimientos[i], "Esta en la posicion: ", i);
        break;
    }
}