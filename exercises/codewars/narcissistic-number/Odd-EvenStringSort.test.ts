import {sortMyString} from "./Odd-EvenStringSort";
describe('sortMyString', function (){
    it('should return s when given s ', function () {
        expect(sortMyString('s')).toBe('s')
    });
    it('should return is when given si', function () {
        expect(sortMyString('si')).toBe('is')
    });
    it('should return ois when given sio ', function () {
        expect(sortMyString('sio')).toBe('ois')
    });
})