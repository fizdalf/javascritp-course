import {quarterOf} from "./QuarterOfTheYear";

describe('quarterOf', () => {
    it('should return 1 when given 1',()=>{
        expect(quarterOf(1)).toBe(1)
    })
    it('should return 1 when given  2',()=>{
        expect(quarterOf(2)).toBe(1)
    })
    it('should return 1 when given  3 ',()=>{
        expect(quarterOf(3)).toBe(1)
    })
    it('should return 2 when given 4  ',()=>{
        expect(quarterOf(4)).toBe(2)
    })
    it('should return 2 when given 5  ',()=>{
        expect(quarterOf(5)).toBe(2)
    })
    it('should return 3 when given 7  ',()=>{
        expect(quarterOf(7)).toBe(3)
    })
    it('should return 4 when given 11  ',()=>{
        expect(quarterOf(11)).toBe(4)
    })


})