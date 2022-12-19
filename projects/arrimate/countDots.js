module.exports = countDots;

function countDots(line) { // [".", "x", ".", ".", "y"]
    let dotsAfterX = 0;
    if (line.length === 4) {
        let dotsAfterX = 2;
        return {
            dotsBeforeX: 0,
            dotsAfterX: dotsAfterX
        };
    }
    if (line.length === 3) {
        let dotsAfterX = 1;
        return {
            dotsBeforeX: 0,
            dotsAfterX: dotsAfterX
        };
    }
    return {
        dotsBeforeX: 0,
        dotsAfterX: dotsAfterX
    };
}
