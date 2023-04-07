import {past} from "./clock";
describe('past',()=>{
    it('should return 1000 milliseconds when given 1 second', function () {
        expect(past(0,0,1)).toBe(1000)
    });
    it('should return 2000 milliseconds when given 2 second', function () {
        expect(past(0,0,2)).toBe(2000)
    });
    it('should return 3000 milliseconds when given 2 second', function () {
        expect(past(0,0,3)).toBe(3000)
    });
    it('should return 118 milliseconds when given 2 second', function () {
        expect(past(1,1,1)).toBe(3661000)
    });


})