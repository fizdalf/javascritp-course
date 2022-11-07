let arguments = process.argv;
// [
// "C:\Program Files\nodejs\node.exe",
// "E:\teaching-resources\javascript-course\control-structures\while.js",
// "a",
// "b",
// "c",
// "d",
// "e"
// ]

let index = 0;
while (index < arguments.length) { //  0 < 7 | 1 < 7 | 2 < 7 | 3 < 7
    let word = arguments[index]; // "C:\Program Files\nodejs\node.exe" | "E:\teaching-resources\javascript-course\control-structures\while.js" | "a"
    console.log(word); // show "C:\Program Files\nodejs\node.exe" | show "E:\teaching-resources\javascript-course\control-structures\while.js" | show "a"
    index = index + 1; // index = 1 | index = 2 | index = 3
    if (index === 3) { // 1  ===3 | 2 === 3 | 3 === 3
        let index2 = 0;// index2 = 0
        while (index2 < arguments.length) { // 0 < 7
            console.log(word);// "a"
            index2 = index2 + 1; // index2 = 1
            if (index === 3) { // 3 === 3
                break;
            }
        }
        break;
    }

}
//
// do {
//
// } while ()
