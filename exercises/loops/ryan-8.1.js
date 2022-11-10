console.log("Piramidaca");
const lines = parseInt(process.argv[2]);
let amountOfLastAsteriscs = ((lines * 2) - 1);

// 1 es 55555* 1
// 2 es 4444*** 2
// 3 es 333***** 5
// 4 es 22******* 7
// 5 es 1********* 9
// 6 es *********** 11
let space = " ";
let asterisc = "*";
let briks = asterisc;

// if (lines === 1) {
//  briks = (`${asterisc}`);
// }
// if (lines === 2) {
//    briks = (`${space}${asterisc}\n${asterisc}${asterisc}${asterisc}`);
// }
// if (lines === 3) {
//    briks = (`${space}${space}${asterisc}\n${space}${asterisc}${asterisc}${asterisc}\n${asterisc}${asterisc}${asterisc}${asterisc}${asterisc}`);
// }


while (amountOfLastAsteriscs > 1) {
    let spaces = space * (lines - 1);
     briks += `${spaces} * ${amountOfLastAsteriscs - 1}\n`;
 //    briks += `${amountOfLastAsteriscs} * ${asterisc}`;
     amountOfLastAsteriscs = amountOfLastAsteriscs - 2;
     asterisc = amountOfLastAsteriscs - 2;
}
console.log(briks);