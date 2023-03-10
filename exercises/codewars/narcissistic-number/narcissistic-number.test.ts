import {isNarcissistic} from './index';

describe('isNarcissistic', function () {
    it('should return true when given 1', () => {
        expect(isNarcissistic(1)).toBe(true);
    });
    it('should return true when given 2', () => {
        expect(isNarcissistic(2)).toBe(true);
    });
    it('should return true when given 3', () => {
        expect(isNarcissistic(3)).toBe(true);
    });
    it('should return false when given 10', () => {
        expect(isNarcissistic(10)).toBe(false);
    });

    it('should return false when given 11', () => {
        expect(isNarcissistic(11)).toBe(false);
    });

    it('should return false when given 12', () => {
        expect(isNarcissistic(12)).toBe(false);
    });
    it('should return false when given 13', () => {
        expect(isNarcissistic(13)).toBe(false);
    });


});
