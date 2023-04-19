import {arrayPacking} from "./arrayPacking";

describe('arrayPacking', function () {
    it('should return a 0 when given [0]', function () {
        expect(arrayPacking([0])).toBe(0);
    });
    it('should return a 1 when given [1]', function () {
        expect(arrayPacking([1])).toBe(1);
    });
    it('should return a 2 when given [2]', function () {
        expect(arrayPacking([2])).toBe(2);
    });
    it('should return a 255 when given [255]', function () {
        expect(arrayPacking([255])).toBe(255);
    });
    it('should return a 256 when given [0, 1]', function () {
        expect(arrayPacking([0, 1])).toBe(256);
    });
    it('should return a 512 when given [0, 2]', function () {
        expect(arrayPacking([0, 2])).toBe(512);
    });
    it('should return a 768 when given [0, 3]', function () {
        expect(arrayPacking([0, 3])).toBe(768);
    });
})


/**
 *
 *     [0, 1]  -> [ 00000000, 00000001 ] -> 00000001 00000000 -> 256
 *     [0, 2]  -> [ 00000000, 00000010 ] -> 00000010 00000000 -> 512
 *     [0, 2]  -> [ 00000000, 00000011 ] -> 00000011 00000000 -> 768
 *
 *
 */
