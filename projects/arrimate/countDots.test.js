const countDots = require("./countDots");
describe('countDots', function () {
    it('should return an object with the zero in both keys when given an empty array', () => {
        expect(countDots(["x","y"])).toStrictEqual({dotsBeforeX: 0, dotsAfterX: 0});
    });
    it('should return an object with the one in dotsAfterX when given an array with a dot after x', () => {
        expect(countDots(["x",".","y"])).toStrictEqual({dotsBeforeX: 0, dotsAfterX: 1});
    });
    it('should return an object with the two in dotsAfterX when given an array with two dots after x', () => {
        expect(countDots(["x",".","y"])).toStrictEqual({dotsBeforeX: 0, dotsAfterX: 1});
    });
});
