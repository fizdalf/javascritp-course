import {litres} from "./KeepHydrated";
describe('litres',()=>{
    it('should return 0 when given 1', function () {
        expect( litres( 1)).toBe( 0)
    });
    it('should return 1 when given 2', function () {
        expect( litres( 2)).toBe( 1)
    });
    it('should return 1 when given 3', function () {
        expect( litres( 3)).toBe( 1)
    });

})