let usuario1 = {
    nombre :"Camilo",
    movimientos :[100000, -50000, 2000000, -500000, 10000000, -8000000],
    totalUsuario : 0
}

let usuario2 = {
    nombre:"Alexander",
    movimientos:[300000, -20000, 1000000, -5000000, 7000000, -950000],
    totalUsuario : 0
} 

let usuario3 = {
    nombre:"Forero",
    movimientos:[10000, -500000, 2000000, -500000, 2000000, -800000],
    totalUsuario : 0
}

let usuarios = [usuario1, usuario2, usuario3];

for(let i = 0; i<=usuarios.length-1;i++){
    for(let j = 0; j<=usuarios[i].movimientos.length-1; j++){
        usuarios[i].totalUsuario += usuarios[i].movimientos[j]; 
    }
    console.log("El saldo actual de:", usuarios[i].nombre, "es de:", usuarios[i].totalUsuario);
}
