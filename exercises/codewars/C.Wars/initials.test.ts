import {initials} from './index';

describe('initials', () => {
    it('should return "A.A" when given "a a"', ()=> {
        expect(initials("a a")).toBe("A.A");
    });
    it('should return "A.E" when given "a e"', ()=> {
        expect(initials("a e")).toBe("A.E");
    });
    it('should return "A.E" when given "a E"', ()=> {
        expect(initials("a E")).toBe("A.E");
    });
})
