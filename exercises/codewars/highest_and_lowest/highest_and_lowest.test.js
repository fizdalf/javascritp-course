const highAndLow = require('./highest_and_lowest');
describe('highAndLow', () => {
    it('should return "1 1" when given "1"', () => {
        expect(highAndLow("1")).toBe("1 1");
    });

    it('should return "5 5" when given "5"', () => {
        expect(highAndLow("5")).toBe("5 5");
    });

    it('should return "8 8" when given "8"', () => {
        expect(highAndLow("8")).toBe("8 8");
    });

});