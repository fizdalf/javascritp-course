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

    it('should return "1 1" when given "1 1"', () => {
        expect(highAndLow("1 1")).toBe("1 1");
    });

    it('should return "2 2" when given "2 2"', () => {
        expect(highAndLow("2 2")).toBe("2 2");
    });

    it('should return "25 25" when given "25 25"', () => {
        expect(highAndLow("25 25")).toBe("25 25");
    });

    it('should return "25 25 25" when given "25 25"', () => {
        expect(highAndLow("25 25 25")).toBe("25 25");
    });

    it('should return "1 1 1" when given "1 1"', () => {
        expect(highAndLow("1 1 1")).toBe("1 1");
    });

    it('should return "-9 -9 -9" when given "-9 -9"', () => {
        expect(highAndLow("-9 -9 -9")).toBe("-9 -9");
    });
});
