module.exports = countDots;

function countDots(line) { // [".", "x", ".", ".", "y"]
    let dotsBeforeX = 0;
    let dotsAfterX = line.length - 2;
    if (line[0] === ".") {
        dotsBeforeX = 1;
        dotsAfterX = 0;
        if (line[1] === ".") {
            dotsBeforeX = 2;
            if (line[2] === ".") {
                dotsBeforeX = 3;
            }
        }
    }

    return {
        dotsBeforeX: dotsBeforeX,
        dotsAfterX: dotsAfterX
    };
}
