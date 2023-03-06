// this is our first program!

let test, hola, juan, jose;
test = 3;


const nombreUsuario = "Pepito grillo";

// String
const myString = "hola";
const myOtherString = 'hola hola hola' + nombreUsuario;
const myOtherString2 = `hola hola hola${45 + 58}`;

myString.length;
myString[0]

console.log(myOtherString);
console.log(myOtherString2);

// Number
const number1 = 334;
const number2 = 32.324;
const number3 = 0o1535;
const red = 0x00;
const green = 0x55;
const blue = 0xff;

// suma, resta, multiplicación, división
const result2 = 5 + 4 - 5 / 3 * 6

// exponenciación
const exponent = 5 ^ 3;
// modulo
const modulo = 5 % 3; // 2
const modulo2 = 502 % 2; // 0

const daysInAWeek = 7;


const inXDays = 7;
const monday = 0;
const tuesday = 1;
const wednesday = 2;
const thursday = 3;
const friday = 4;
const saturday = 5;
const sunday = 6;


console.log(inXDays % daysInAWeek);

console.log(7 % 2) === 0


// 3      2      1       0
//
//                                            10     10     10      10
//                                             1       5     3       5  ->          1*10^3   + 5 * 10^2 + 3 * 10^1 +  5 * 10^0 = 1535
//
//  3      2      1       0
// 8     8     8     8
// 1       5     3       5  ->          1 * 8^3 + 5 * 8^2 + 3 * 8^1 +  5 * 1 = 5 + 24 + 320 + 512  = 861
//  3      2      1    0
// 2     2     2     2
// 1       0     1       0  ->          1 * 2^3 + 5 * 8^2 + 3 * 8^1 +  5 * 1 = 5 + 24 + 320 + 512  = 861
const resultado = parseFloat('2') + 2; // -> 4
// 1.1520 * 10^5 -> 115200

// Object
const myObject1 = {};
const myObject2 = {
    sabor: "nata",
    size: "grande",
    coste: "50.50",
    prestado: "si"
};
myObject2.size;

const MyCar = {
    color: "red",
    speedMilesPerHour: 250,
    length: "grande",
    weight: 2000,
    heightInMeters: 1.5,
}
const MyCar2 = {
    loquemesalga: 2,
    color: "red",
    speedMilesPerHour: 250,
    length: "grande",
    weight: 2000,
    heightInMeters: 1.5,
}
const animal = {
    name: "Puto perro te quiero",
    weight: 69,
    color: "pink",
    etnia: "punk dog",
    agressive: undefined,
    age: 3,

};

// Boolean

const testTrue = true;
const testFalse = false;
// truthy, falsey
// number -> { 0 = false, anythingElse = true}
// string -> { '' = false, anythingElse = true}
// object -> { siempre es true }
// array ->  { siempre es true }
// function -> { siempre es true }
// null  ->  { siempre es false }
// undefined -> { siempre es false }
// operadores booleanos
// a && b -> será verdadero si y SOLO SI a y b son verdaderos
// a || b -> será falso si, y SOLO SI a y b son falsos
// !a     -> será lo contrario de a
// (a && b || c && !d && ( b || !a))
const firstNumber = 1;

const result = (firstNumber || 4) + 2;
const notResult = (firstNumber && 4) + 2;
// Array
const myList = [
    null,
    undefined,
    NaN,
    true,
    false,
    {},
    [],
    34,
    43.4,
];

myList.length // cuantos elementos tiene
console.log(myList[5]) // {}

let myFutureHomeAnimals = [];
let dog = {
    name: 'Pulga',
    type: 'Presa Canario',
    color: 'Camuflage',
    sex: 'Female',
    age: 1,
};
let cat = {
    name: 'Bigotitos',
    type: 'Apresa un Canario',
    color: 'Skin',
    sex: 'Female',
    age: 2,
};
let tiger = {
    name: 'Rajah',
    type: 'Bengala Tiger',
    color: 'Yellow',
    sex: 'Male',
    age: 13,
};
let perenquen = {
    name: 'Colita',
    type: 'Salamanquesa',
    color: 'Green',
    sex: undefined,
    age: 0,
};
let fenix = {
    name: 'Inmortal',
    type: 'Fire',
    color: 'Orange',
    sex: 'Pansexual',
    age: 5e+10,
};
myFutureHomeAnimals.push(fenix,perenquen,tiger,dog, cat);



const Vehicles= [];


const Car={
    color:'blue',
    weigth:1200,
    speed: 260,
    seating:5,
};

const plane={
    color:'white',
    weigth:41000,
    speed:933,
    seating:600,
};

const motorcycle={
    color:'green',
    weigth:250,
    speed: 230,
    seating:2,

};

const boat={
    color:'orange',
    weigth:2000,
    speed:350,
    seating:30,
};

Vehicles.push(motorcycle, Car, boat, plane);
console.log(Vehicles[2].speed, boat.speed);


// Undefined
// Function

console.log(number3)


// operador typeof, permite determinar el tipo de un dato.






