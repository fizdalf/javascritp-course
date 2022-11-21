let myArray = [1, 2, 8, 4, 5, 6];
let counter = 0;
// while (counter < myArray.length) {
//     console.log(myArray[counter]);
//     counter++;
// }
//
// for (let index = myArray.length - 1; index >= 0; index--) {
//     console.log(myArray[index]);
// }

let myObject = {hola: "testHola", name: "testName", "ésta clave es compleja": 'my value'};

for (const keyName in myObject) {
    console.log(keyName);
}
