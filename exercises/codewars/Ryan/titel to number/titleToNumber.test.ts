import {titleToNumber} from "./titleToNumber";

describe('titleToNumber', function (){
    it('should return 1 when given A', function () {
        expect(titleToNumber('A')).toBe(1);
    });
    it('should return 2 when given B', function () {
        expect(titleToNumber('B')).toBe(2);
    });
    it('should return 3 when given C', function () {
        expect(titleToNumber('C')).toBe(3);
    });
    it('should return 26 when given Z', function () {
        expect(titleToNumber('Z')).toBe(26);
    });
    it('should return 27 when given AA', function () {
        expect(titleToNumber('AA')).toBe(27);
    });
    it('should return 28 when given AB', function () {
        expect(titleToNumber('AB')).toBe(28);
    });
    it('should return 29 when given AC', function () {
        expect(titleToNumber('AC')).toBe(29);
    });
    it('should return 53 when given BA', function () {
        expect(titleToNumber('BA')).toBe(53);
    });
    it('should return 702 when given ZZ', function () {
        expect(titleToNumber('ZZ')).toBe(702);
    });
    it('should return 703 when given AAA', function () {
        expect(titleToNumber('AAA')).toBe(703);
    });
    it('should return 28779382963 when given CODEWARS', function () {
        expect(titleToNumber('CODEWARS')).toBe(28779382963);
    });
});