let number = process.argv[2];

if (number % 2 === 0) {
    console.log("El número " + [number] + " es par");
} else {
    console.log(`El número ${number} es impar`);
}