module.exports = function (numberList) {
    const numbers = numberList.split(" ");
    if (numbers.length === 2) {
        return numberList;
    }
    return `${numberList} ${numberList}`;
};
