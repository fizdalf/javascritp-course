let word = process.argv[2];

let data;

switch (word) {
    case "perro" :
        data = "can";
        break;
    case "gato" :
        data = "felino";
        break;
    case "hombre" :
        data = "homínido";
        break;
    case "tortuga" :
        data = "galápago";
        break;
    case "gorrión" :
        data = "ave";
        break;
    default:
        data = "";
}
console.log(data);
