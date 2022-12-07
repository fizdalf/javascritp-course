const nextPal = require('./next-palindromic-number');

describe('nextPal', () => {
    it("should return 22 when given 11", () => {
        expect(nextPal(11)).toBe(22);
    });
    it("should return 22 when given 12", () => {
        expect(nextPal(12)).toBe(22);
    })
    it("should return 33 when given 22", () => {
        expect(nextPal(22)).toBe(33);
    })
    it("should return 33 when given 23", () => {
        expect(nextPal(23)).toBe(33);
    })
    it("should return 33 when given 24", () => {
        expect(nextPal(24)).toBe(33);
    })
    it("should return 33 when given 32", () => {
        expect(nextPal(32)).toBe(33);
    })
    it("should return 44 when given 33", () => {
        expect(nextPal(33)).toBe(44);
    })
    it("should return 44 when given 43", () => {
        expect(nextPal(43)).toBe(44);
    })
    it("should return 55 when given 44", () => {
        expect(nextPal(44)).toBe(55);
    })
    it("should return 55 when given 54", () => {
        expect(nextPal(54)).toBe(55);
    })
    it("should return 191 when given 188", () => {
        expect(nextPal(188)).toBe(191);
    })
    it("should return 202 when given 191", () => {
        expect(nextPal(191)).toBe(202);
    })
    it("should return 2552 when given 2541", () => {
        expect(nextPal(2541)).toBe(2552);
    })
    it("should test something" ,() => {})
});
