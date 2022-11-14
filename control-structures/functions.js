function testIsEven(number) {
    return number % 2 === 0;
}

function recursive(number) {
    if (number > 0) {
        recursive(number - 1);
    }
    return 0;
}

function caller(number1, number2, operator) {

    return operator(number1, number2);
}

function comparator(number1, number2, comparisonFunction){
    return comparisonFunction(number1, number2);
}

function compareWithTwo(number1, comparisonFunction){
    return comparisonFunction(number1, 2);
}

const result = compareWithTwo(1,  function (number1, number2) {
    return number1 === number2
});
console.log(result);
const myFunction = function () {
    console.log('test');
}
const myArrowFunction = (a,b) => {
    return a > b;
};
const myArrowFunctionAlternative = (a,b) => a > b;

function pepe(first,second){
    console.log(`${first} es muy agradable, pero no le cae bien ${second}`);
}

pepe('jose','juan')
pepe("mi polla", "en tu cara");

let mete = "saca";
let saca = "sacalo";

const result = mete + " " +  saca;


