import {flip} from "./GravityFlip";
describe('flip', ()=>{
    it('should return a when given 1 element ', function () {
        expect(flip('R', [1])).toStrictEqual([1])
    });
    it('should ', function () {
        expect(flip('R', [2])).toStrictEqual([2])
    });
    it('should return modified array', function () {
        expect(flip('R', [2, 1])).toStrictEqual([1, 2])
    });
    it('should return modified array 2', function () {
        expect(flip('R', [2, 1, 3])).toStrictEqual([1, 2, 3])
    });
    it('should return modified array 3', function () {
        expect(flip('R', [2, 1, 3, 5, 4])).toStrictEqual([1, 2, 3, 4, 5])
    });
    it('should return modified array when d is equal L', function () {
        expect(flip('L', [2, 1, 3, 5, 4])).toStrictEqual([5, 4, 3, 2, 1])
    });
})