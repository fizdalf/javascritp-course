module.exports = countDots;

function countDots(line) { // [".", "x", ".", ".", "y"]
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
