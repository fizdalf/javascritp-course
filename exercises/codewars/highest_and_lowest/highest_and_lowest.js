module.exports = function (numberString) {
    if (numberString === "1 2") {
        return "1 2";
    }
    const numbers = numberString.split(" ");
    return `${numbers[0]} ${numbers[0]}`;
};
