let age = process.argv[2];

const minimumAgeToAccess = 18;
const maximumAgeOfAccess = 30;
const ageWithShotOffer = 25;

if (age < minimumAgeToAccess) {
    console.log("no puedes entrar");// no entra
} else if (age >= ageWithShotOffer && age <= maximumAgeOfAccess) { //  false < 31 -> 0 < 31
    console.log("Aquí tienes el chupito gratis. Entra y diviertete");
} else if (age > maximumAgeOfAccess) {
    console.log("Adonde vas tu tutankamon. Tira par casa");
} else {
    console.log("Adelante que lo pases bien");
}
