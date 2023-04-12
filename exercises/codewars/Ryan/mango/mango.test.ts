import {mango} from './mango';

describe('mango', () => {
    it('should return 3 when given 1 mango at a price 3', function () {
        const quantity = 1
        const price = 3
        expect(mango(quantity, price)).toBe(3);
    });
    it('should return 9 when given 4 mango at a price 3', function () {
        const quantity = 4
        const price = 3
        expect(mango(quantity, price)).toBe(9);
    });
    it('should return 18 when given 8 mango at a price 3', function () {
        const quantity = 8
        const price = 3
        expect(mango(quantity, price)).toBe(18);
    });
})