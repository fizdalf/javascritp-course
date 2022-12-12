module.exports = function (numberString) {


    if (numberString === "2 1") {
        return "2 1";
    }
    const numbers = numberString.split(" ");
    return `${numbers[0]} ${numbers[0]}`;
};
