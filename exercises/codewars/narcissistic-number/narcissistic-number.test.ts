import {isNarcissistic} from './index';

describe('isNarcissistic', function () {
    it('should return true when given 1', () => {
        expect(isNarcissistic(1)).toBe(true);
    });
    it('should return false when given 10', () => {
        expect(isNarcissistic(10)).toBe(false);
    });
    it('should return true when given 153', () => {
        expect(isNarcissistic(153)).toBe(true);
    });
    it('should return true when given 1634', () => {
        expect(isNarcissistic(1634)).toBe(true);
    });
});

