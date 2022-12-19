module.exports = countDots;

function countDots(line) { // [".", "x", ".", ".", "y"]
    let dotsAfterX = line.length - 2;
    return {
        dotsBeforeX: 0,
        dotsAfterX: dotsAfterX
    };
}
