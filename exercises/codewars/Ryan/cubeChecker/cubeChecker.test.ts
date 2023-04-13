import {cubeChecker} from "./cubeChecker";
describe('cubeChecker', function () {
    it('should return true when volume 1 and side 1', function () {
        expect(cubeChecker(1,1)).toBe(true);
    });
    it('should return false when volume 2 and side 1', function () {
        expect(cubeChecker(2,1)).toBe(false);
    });
});