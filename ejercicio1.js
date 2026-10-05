let movimientos = [100000, -50000, 2000000, -500000, 10000000, -8000000];
let total = 0;
let cantidadRetiros = 0;

for(let movimiento of movimientos){
    total += movimiento;
    if(movimiento < 0){
        cantidadRetiros+=1;
    }
}
console.log("El saldo actual de tu cuenta es: ", total, " Retiraste: ", cantidadRetiros, " veces");




