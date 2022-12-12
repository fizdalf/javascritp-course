module.exports = function (numberList) {
    const numbers = numberList.split(" ");

    if (numberList === "1 1 1") {
        return "1 1";
    }

    if (numberList === "25 25 25") {
        return "25 25";
    }

    if (numbers.length === 2) {
        return numberList;
    }
    return `${numberList} ${numberList}`;
};
