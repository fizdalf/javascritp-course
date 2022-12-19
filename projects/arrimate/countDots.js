module.exports = countDots;

function countDots(line) { // [".", "x", ".", ".", "y"]
    let dotsAfterX = 0;
    if (line.length === 4) {
        return {
            dotsBeforeX: 0,
            dotsAfterX: 2
        };
    }
    if (line.length === 3) {
        return {
            dotsBeforeX: 0,
            dotsAfterX: 1
        };
    }
    return {
        dotsBeforeX: 0,
        dotsAfterX: 0
    };
}
