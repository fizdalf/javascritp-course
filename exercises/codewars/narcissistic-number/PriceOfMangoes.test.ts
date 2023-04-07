import {mango} from "./PriceOfMangoes";
describe('mango',()=>{
    it('should return 1 euro when given 1 mango',()=>{
        expect(mango(1,1)).toBe(1)
    })
    it('should return 2 euro when given 2 mango',()=>{
        expect(mango(2,1)).toBe(2)
    })
    it('should return 3 euro when given 3 mango',()=>{
        expect(mango(3,1)).toBe(2)
    })
    it('should return 3 euro when given 4 mango',()=>{
        expect(mango(4,1)).toBe(3)
    })
    it('should return 2 euro when given 1 mango',()=>{
        expect(mango(1,2)).toBe(2)
    })
    it('should return 4 euro when given 5 mango',()=>{
        expect(mango(5,1)).toBe(4)
    })
    it('should return 4 euro when given 6 mango',()=>{
        expect(mango(6,1)).toBe(4)
    })
    it('should return 2 euro when given 1 mango',()=>{
        expect(mango(1,2)).toBe(2)
    })
    it('should return 4 euro when given 2 mango',()=>{
        expect(mango(2,2)).toBe(4)
    })
})