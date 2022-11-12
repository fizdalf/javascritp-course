console.log("Piramidaca");
const lines = parseInt(process.argv[2]);
let amountOfLastAsteriscs = ((lines * 2) - 1);
let firstLine = `${lines - 1} * ${space} ${asterisc}`;
let space = " ";
let asterisc = "*";
let briks = "";
let midelAsterisc = amountOfLastAsteriscs - 2
console.log(firstLine);

while (amountOfLastAsteriscs > 1) {
    midelAsterisc = `${space} * ${lines - 2} + ${amountOfLastAsteriscs}`;
    amountOfLastAsteriscs = amountOfLastAsteriscs - 2;
    console.log(midelAsterisc);
    if (amountOfLastAsteriscs === 1) {
        console.log(amountOfLastAsteriscs);
    }
}
/*
 1 es 55555* 1
 2 es 4444*** 2
 3 es 333***** 5
 4 es 22******* 7
 5 es 1********* 9
 6 es *********** 11
 */

/*
if (lines === 1) {
    briks = asterisc;
} else if  (lines ===2) {
    briks = space + asterisc + asterisc;
    briks = asterisc + asterisc;
}
 */





