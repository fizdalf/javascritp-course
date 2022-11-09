const height = parseInt(process.argv[2]);
const amountOfCharacters = (height * 2) - 1;
const initialAmountOfSpaces = height - 1;
if (height === 1) {
    let result = "*";
    console.log(result);
}

if (height === 2) {
    let result = "";
    let firstString = " * \n";
    let secondString = "***";
    result += firstString + secondString;
    console.log(result);
}

if (height === 3) {
    console.log('  *  \n *** \n*****');
}
if (height === 4) {
    console.log('   *   \n  ***  \n ***** \n*******');
}
