let number = process.argv[2];

let modifier = "";
if (number % 2 !== 0) {
    modifier = "im";
}
console.log(`El número ${number} es ${modifier}par`);
