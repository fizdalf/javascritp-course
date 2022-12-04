let y = [2, 2, 3];
let z = [5, 4, 1];

function cuboidsDifference(y, z) {
    let totalY = calculateVolume(y);
    let totalZ = calculateVolume(z)
    return absoluteValue(totalY - totalZ);
}

const total = cuboidsDifference(y, z);
console.log(total);

function calculateVolume(cuboid) {
    return cuboid.reduce((previousValue, currentValue) => previousValue * currentValue, 1);
}

function absoluteValue(number) {
    if (number < 0) {
        return number * -1;
    }
    return number;
}


let accumulated = 1;
let numbers = [1, 2, 3];
for (let i = 0; i < numbers; i++) {
    accumulated = accumulated * numbers[i];
}
