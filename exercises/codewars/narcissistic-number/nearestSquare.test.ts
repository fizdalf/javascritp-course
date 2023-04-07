import {nearestSq} from "./nearestSquare";
describe('nearestSq',()=>{
    it('should return 1 when given 1', function () {
        expect(nearestSq(1)).toBe(1)
    });
    it('should return 1 when given 2', function () {
        expect(nearestSq(2)).toBe(1)
    });
    it('should return 4 when given 3', function () {
        expect(nearestSq(3)).toBe(4)
    });
    it('should return 4 when given 4', function () {
        expect(nearestSq(4)).toBe(4)
    });
    it('should return 4 when given 5', function () {
        expect(nearestSq(4)).toBe(4)
    });
    it('should return 4 when given 6', function () {
        expect(nearestSq(6)).toBe(9)
    });
    it('should return 9 when given 7', function () {
        expect(nearestSq(7)).toBe(9)
    });
    it('should return 9 when given 12', function () {
        expect(nearestSq(12)).toBe(9)
    });
    it('should return 16 when given 17', function () {
        expect(nearestSq(17)).toBe(16)
    });
    it('should return 16 when given 19', function () {
        expect(nearestSq(19)).toBe(16)
    });



})