let levels = parseInt(process.argv[2]);
let lastLevelAsteriscs = (levels * 2) - 1;
let asterisc = `*`;
let space = ` `;
let number = 1;
let firstAsterisc = 1;
let message1 = "";
let message2 = "";
let message3 = "";

while (lastLevelAsterisc >= number) {
    message1 = `${space * (levels - 1)}`;
    message2 = `${asterisc * firstAsterisc}`;
    message3 = `${space * (levels -1)}`;

    console.log(message1+message2+message3);

    firstAsterisc = + 2;
    lastLevelAsteriscs = lastLevelAsteriscs - 1;
}
console.log("Fin de la Piramidaca");


