import {countSquares} from "./countSquares";

describe('countSquares', () => {
    it('should return 26 when given 2 cuts', function () {
        expect(countSquares(2)).toBe(26);
    });
    it('should return 98 when given 4 cuts', function () {
        expect(countSquares(2)).toBe(98);
    });
})