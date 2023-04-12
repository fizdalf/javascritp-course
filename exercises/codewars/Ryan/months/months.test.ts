import {months} from "./months";
import {stringifyBoard} from "../../../../projects/arrimate-tipo/stringify-board";

describe('months', function () {
    it('should return 1 when asked for the month 2, february', function () {
        expect(months(2)).toBe(1);
    });
    it('should return 2 when asked for the month 4, April', function () {
        expect(months(4)).toBe(2);
    });
    it('should return 3 when asked for the month 7, July', function () {
        expect(months(7)).toBe(3);
    });
    it('should return 4 when asked for the month 12, December', function () {
        expect(months(12)).toBe(4);
    });
});