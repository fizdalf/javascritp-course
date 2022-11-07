let cantidadOvejas = parseInt(process.argv[2]);
let message = "";
let number = 1;
while (cantidadOvejas >= number) {
    let plural = `s`;
    if (number === 1) {
        plural = "";
    }
    message += `${number} Oveja${plural}...`;
    number = number + 1; // number++;
}

console.log(message);
