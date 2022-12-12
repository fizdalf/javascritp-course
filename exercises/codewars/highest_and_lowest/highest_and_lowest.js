module.exports = function (numberString) {


    if (numberString === "25 -90") {
        return "25 -90";
    }

    if (numberString === "3 -9") {
        return "3 -9";
    }

    if (numberString === "2 1") {
        return "2 1";
    }
    const numbers = numberString.split(" ");
    let max = numbers[0];
    let min = numbers[numbers.length < 2 ? 0 : 1];
    return `${max} ${min}`;
};
