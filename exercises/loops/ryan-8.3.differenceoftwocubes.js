

let total = "";

let y = ["2", "2", "3"];
let totaly = y.reduce((a,b,c) => y(a) + y(b) + y(c), 0);
let z = ["5", "4", "1"];
let totalz = z.reduce((a,b,c) => z(a) + z(b) + z(c), 0);
let total = totaly - totalz;

console.log(total);

let numbers = ["101", "3"];
let total = numbers.reduce((a, b) => Number(a) + Number(b), 0);

console.log(total);