const countDots = require("./countDots");
describe('countDots', function () {
    it('should return an object with the zero in both keys when given an empty array', () => {
        expect(countDots(["x","y"])).toStrictEqual({dotsBeforeX: 0, dotsAfterX: 0});
    });
    
});
