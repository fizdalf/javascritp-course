import {calculateNarcissus} from './index';
describe('calculateNarcissus', ()=>{
    it('should return 1 when given 1', ()=>{
        expect(calculateNarcissus(1)).toBe(1);
    })
    it('should return 5 when given 5', ()=>{
        expect(calculateNarcissus(5)).toBe(5);
    })
    it('should return 7 when given 7', ()=>{
        expect(calculateNarcissus(7)).toBe(7);
    })
    it('should return 9 when given 9', ()=>{
        expect(calculateNarcissus(9)).toBe(9);
    })
    it('should return 1 when given 10', ()=>{
        expect(calculateNarcissus(10)).toBe(1);
    })
    it('should return 2 when given 11', ()=>{
        expect(calculateNarcissus(11)).toBe(2);
    })
    it('should return 5 when given 12', ()=>{
        expect(calculateNarcissus(12)).toBe(5);
    })
    it('should return 7 when given 13', ()=>{
        expect(calculateNarcissus(13)).toBe(10);
    })
})
