import {numberToBinary} from "./numberToBinary";
describe('numberToBinary', function (){
    it("should give the number '00000000' when given a 0", function () {
        expect(numberToBinary(0)).toBe('00000000');
    });
    it("should give the number '00000001' when given a 1", function () {
        expect(numberToBinary(1)).toBe('00000001');
    });
    it("should give the number '00000010' when given a 2", function () {
        expect(numberToBinary(2)).toBe('00000010');
    });
    it("should give the number '00000011' when given a 3", function () {
        expect(numberToBinary(3)).toBe('00000011');
    });
    it("should give the number '00000100' when given a 4", function () {
        expect(numberToBinary(4)).toBe('00000100');
    });
    it("should give the number '00000101' when given a 5", function () {
        expect(numberToBinary(5)).toBe('00000101');
    });
    it("should give the number '00000110' when given a 6", function () {
        expect(numberToBinary(6)).toBe('00000110');
    });
    it("should give the number '00001010' when given a 10", function () {
        expect(numberToBinary(10)).toBe('00001010');
    });
})