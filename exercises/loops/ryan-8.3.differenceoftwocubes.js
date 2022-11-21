let y = ["2", "2", "3"];
let z = ["5", "4", "1"];
function difference (a,b,c) {
    let y = y.reduce((a,b,c) => y(a) + y(b) + y(c), 0);
    let z = z.reduce((a,b,c) => z(a) + z(b) + z(c), 0);
    return y - z;
}
console.log(difference);

let numbers = ["101", "3"];
let total = numbers.reduce((a, b) => Number(a) + Number(b), 0);

console.log(total)