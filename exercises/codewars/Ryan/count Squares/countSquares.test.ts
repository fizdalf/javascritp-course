import {countSquares} from "./countSquares";

describe('countSquares', () => {
    it('should return 26 when given 2 cuts', function () {
        expect(countSquares(2)).toBe(26);
    });
    it('should return 98 when given 4 cuts', function () {
        expect(countSquares(4)).toBe(98);
    });
    it('should return 152 when given 5 cuts', function () {
        expect(countSquares(5)).toBe(152);
    });
    it('should return 218 when given 6 cuts', function () {
        expect(countSquares(6)).toBe(218);
    });
    it('should return 3176 when given 23 cuts', function () {
        expect(countSquares(23)).toBe(3176);
    });
})