const age = process.argv[2];
let write;

if (age < 18) {
    write = "No puedes entrar";
} else if ((age > 24) && (age <= 30)) {
    write = "Aquí tienes un chupito gratis. Entra y diviertete";
} else if (age > 30) {
    write = "A donde vas Tutankamon. Tira para casa";
} else {
    write = "Adelante, que lo pases bien";
}
console.log(write);
