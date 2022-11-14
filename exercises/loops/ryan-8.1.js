let levels = parseInt(process.argv[2]);
let asterisc = `*`;
let space = ` `;
let number = 1;
let firstAsterisc = 1;
let message1 = "";
let message2 = "";
let message3 = "";
let levelsMessage1 = `${levels - 1}`;

while (levelsMessage1 >= number) {
    message1 = space;
}
levelsMessage1 = levelsMessage1 - 1;

while (levels >= number) {
    message1 = `${space * (levelsMessage1)}`;
    message2 = `${asterisc * firstAsterisc}`;
    message3 = `${space * (levelsMessage1)}`;
    console.log(message1 + message2 + message3);
    firstAsterisc = + 2;
    levels = levels - 1;
}
console.log("Fin de la Piramidaca");


