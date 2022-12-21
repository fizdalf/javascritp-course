module.exports = countDots;

function countDots(line) { // [".", "x", ".", ".", "y"]
    let dotsBeforeX = 0;
    let dotsAfterX = line.length - 2;
    let i = 0;
    while (line[i] !== "x") {
        dotsBeforeX++;
        i++;
    }
    if (dotsBeforeX >= 1) {
        dotsAfterX = 0;
    }

    return {
        dotsBeforeX: dotsBeforeX,
        dotsAfterX: dotsAfterX
    };
}
