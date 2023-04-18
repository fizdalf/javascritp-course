import {arrayPacking} from "./arrayPacking";
describe('arrayPacking', function (){
    // it('should return 10 when given [2]', function () {
    //     expect(arrayPacking([2])).toBe(10)
    // });
    // it('should return 11 when given [3]', function () {
    //     expect(arrayPacking([3])).toBe(11)
    // });
    // it('should return 11110 when given [30]', function () {
    //     expect(arrayPacking([30])).toBe(11110)
    // });
    it('should return 11110 when given [30]', function () {
        expect(arrayPacking([24, 32, 5])).toBe(11110)
    });
})