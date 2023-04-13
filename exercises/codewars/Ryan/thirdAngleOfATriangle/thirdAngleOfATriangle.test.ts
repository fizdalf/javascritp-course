import {thirdAngleOfaTriangle} from "./thirdAngleOfaTriangle";

describe('thirdAngleOfATriangle', function () {
    it('should return the angle missing', function () {
        expect(thirdAngleOfaTriangle(120, 10)).toBe(50);
    });
    it('should return the angle missing of a triangle', function () {
        expect(thirdAngleOfaTriangle(10, 80)).toBe(90);
    });
});