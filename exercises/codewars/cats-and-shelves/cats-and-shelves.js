function solution(start, finish) {
    const distance = finish - start;
    return Math.floor(distance / 3) + distance % 3;
}

module.exports = solution;
