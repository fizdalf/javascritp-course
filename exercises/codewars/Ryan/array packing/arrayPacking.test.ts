import {arrayPacking} from "./arrayPacking";

describe('arrayPacking', ()=> {
    it('should return 0 when given [0] ', function () {
        expect(arrayPacking([0])).tobe(0);
    });
})