const countDots = require("./countDots");
describe('countDots', function () {
    it('should return an object with the zero in both keys when given an empty array', () => {
        expect(countDots(["x", "y"])).toStrictEqual({dotsBeforeX: 0, dotsAfterX: 0});
    });
    it('should return an object with the one in dotsAfterX when given an array with a dot after x', () => {
        expect(countDots(["x", ".", "y"])).toStrictEqual({dotsBeforeX: 0, dotsAfterX: 1});
    });
    it('should return an object with the two in dotsAfterX when given an array with two dots after x', () => {
        expect(countDots(["x", ".", ".", "y"])).toStrictEqual({dotsBeforeX: 0, dotsAfterX: 2});
    });
    it('should return an object with 0 dotsAfterX and 1 dotsBeforeX when given an array with one dot before x', () => {
        expect(countDots([".", "x", "y"])).toStrictEqual({
            dotsBeforeX: 1,
            dotsAfterX: 0
        });
    });
    it('should return an object with 0 dotsAfterX and 2 dotsBeforeX when given an array with two dots before x', () => {
        expect(countDots([".", ".", "x", "y"])).toStrictEqual({
            dotsBeforeX: 2,
            dotsAfterX: 0
        });
    });
    it('should return an object with 0 in dotsAfterX and 3 in dotsBeforeX when given an array with three dots before x', () => {
        expect(countDots([".", ".", ".", "x", "y"])).toStrictEqual({
            dotsBeforeX: 3,
            dotsAfterX: 0
        });
    });
    it('should return an object with 1 dotsAfterX and 1 dotBeforeX when given an array with 1 dot after x and 1 dot before x', () => {
        expect(countDots([".", "x", ".", "y"])).toStrictEqual({
            dotsBeforeX: 1,
            dotsAfterX: 1
        });
    });
});
