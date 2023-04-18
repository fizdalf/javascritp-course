import {sortMyString} from "./Odd-EvenStringSort";
describe('sortMyString', function (){
    it('should return s when given s ', function () {
        expect(sortMyString('s')).toBe('s ')
    });
    it('should return is when given si', function () {
        expect(sortMyString('si')).toBe('s i')
    });
    it('should return ois when given sio ', function () {
        expect(sortMyString('sio')).toBe('so i')
    });
    it('should return CdWr oeas when given CodeWars ', function () {
        expect(sortMyString('CodeWars')).toBe('CdWr oeas')
    });
    it('should return YOU\'RE CLEVER when given YCOLUE\'VREER ', function () {
        expect(sortMyString('YCOLUE\'VREER')).toBe('YOU\'RE CLEVER')
    });
})