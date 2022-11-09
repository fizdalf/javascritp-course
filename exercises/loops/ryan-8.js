let piramide = parseInt(process.argv[2]);
let message = "";
if (piramide === 1) {
    message = "*";
}

if (piramide === 2) {
    message = `*\n* *`;
}
if (piramide === 3) {
    message = `*\n* *\n* * *`;
}
console.log(message);
