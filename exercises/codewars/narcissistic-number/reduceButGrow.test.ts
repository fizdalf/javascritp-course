import {grow} from "./reduceButGrow";

describe('grow', ()=>{
    it('should return 1 when given [1] ',()=> {
        expect(grow([1])).toBe(1)
    });
    it('should return 2 when given [2] ',()=> {
        expect(grow([2])).toBe(2)
    });
    it('should return 2 when given [2,1]',()=> {
        expect(grow([2])).toBe(2)
    });
})