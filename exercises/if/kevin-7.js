let cantidadOvejas = parseInt(process.argv[2]);
let ovejas = 0;

while (ovejas <= cantidadOvejas) {
    console.log(ovejas + " Ovejas");
    ovejas++;
    if (ovejas === 1) {
        console.log(ovejas + " Oveja");
    }
}


