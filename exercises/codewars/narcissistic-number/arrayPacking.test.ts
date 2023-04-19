import {arrayPacking} from "./arrayPacking";

describe('arrayPacking', function () {
    it('should return a 0 when given [0]', function () {
        expect(arrayPacking([0])).toBe(0);
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
