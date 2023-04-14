import {countSquares} from "./countSquares";

describe('countSquares', () => {
    it('should return 8 when given 2 cuts', function () {
        expect(countSquares(2)).toBe(8);
    });
})