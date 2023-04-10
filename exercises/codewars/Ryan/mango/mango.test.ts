import {mango} from './mango';

describe('mango', () => {
    it('should return 3 when given 1 mango at a price 3', function () {
        const quantity = 1
        const price = 3
        expect(mango(quantity, price)).toBe(3);
    });
})