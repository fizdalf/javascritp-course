module.exports = function (numberString) {
    const numbers = numberString.split(" ");
    let max = numbers[0];
    let min = numbers[numbers.length < 2 ? 0 : 1];
    return `${max} ${min}`;
};
