module.exports = highAndLow;

function highAndLow(numberString) {
    const numbers = numberString.split(" ").map(x => parseInt(x, 10));
    let max = maximum(...numbers);
    let min = minimum(...numbers);
    return `${max} ${min}`;
}

function maximum(...numbers){
    let max = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
        const item = numbers[i];
        if(item > max){
            max = item;
        }
    }
    return max;
}

function minimum(...numbers){
    let min = Infinity;
    for (let i = 0; i < numbers.length; i++) {
        const item = numbers[i];
        if(item < min){
            min = item;
        }
    }
    return min;
}
