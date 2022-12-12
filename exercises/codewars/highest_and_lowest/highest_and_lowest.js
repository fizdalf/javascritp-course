module.exports = function (numberString) {
    const numbers = numberString.split(" ");

    if (numbers.length === 3) {
        return `${numbers[0]} ${numbers[0]}`;
    }

    if (numbers.length === 2) {
        return numberString;
    }
    return `${numberString} ${numberString}`;
};
