let number1 = process.argv[2];
let number2 = process.argv[3];
let word = process.argv[4];
let data;
switch (word) {
    case "sum" :
        data = `${word} of ${number1} and ${number2} is ${parseFloat(number1) + parseFloat(number2)}`;
        break;
    case "sub" :
        data = `${word} of ${number1} and ${number2} is ${number1 - number2}`;
        break;
    case "prod" :
        data = `${word} of ${number1} and ${number2} is ${number1 * number2}`;
        break;
    case "div" :
        data = `${word} of ${number1} and ${number2} is ${number1 / number2}`;
        break;
    case "mod" :
        data = `${word} of ${number1} and ${number2} is ${number1 % number2}`;
        break;
    default:
        data = `Invalid Operation`;
        break;
}
console.log(data);
