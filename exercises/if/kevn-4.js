const userNumber = process.argv[2];

if (userNumber % 2 === 0) {
    console.log("El " + userNumber + " es par");
} else {
    console.log("El " + userNumber + " es impar");
}
