const highAndLow = require('./highest_and_lowest');
describe('highAndLow', () => {
    it('should return "1 1" when given "1"', () => {
        expect(highAndLow("1")).toBe("1 1");
    })
});
