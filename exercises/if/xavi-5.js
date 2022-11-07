let number1 = process.argv[2];
let number2 = process.argv[3];
let word = process.argv[4];
let result;
switch (word) {
    case "sum" :
        result = parseFloat(number1) + parseFloat(number2);
        break;
    case "sub" :
        result = number1 - number2;
        break;
    case "prod" :
        result = number1 * number2;
        break;
    case "div" :
        result = number1 / number2;
        break;
    case "mod" :
        result = number1 % number2;
        break;
    default:
        result = `Invalid Operation`;
        break;
}
console.log(`${word} of ${number1} and ${number2} is ${result}`);
