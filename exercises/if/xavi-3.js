// el programa recibirá una palabra por terminal y mostrará por pantalla la palabra relacionada( si me pasan la de la izquierda
// muestro la de la derecha)
// "perro" -> "can", "gato" -> "felino", "hombre" -> "homínido", "tortuga" -> "galápago", "gorrión" -> "ave"
let word = process.argv[2];

let data;
if (word === "perro") {
    data = "can";
} else if (word === "gato") {
    data = "felino";
} else if (word === "hombre") {
    data = "homínido";
} else if (word === "gorrión") {
    data = "ave";
} else if (word === "tortuga") {
    data = "galápago";
}

