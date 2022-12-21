module.exports = countDots;

function countDots(line) {
    let dotsBeforeX = 0;
    let dotsAfterX = 0;
    let i = 0;
    while (line[i] !== "x") {
        dotsBeforeX++;
        i++;
    }
    i++;
    while (line[i] !== "y") {
        dotsAfterX++;
        i++;
    }
    return {
        dotsBeforeX: dotsBeforeX,
        dotsAfterX: dotsAfterX
    };
}
