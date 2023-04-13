import {keepHydrated} from "./keepHydrated";

describe('keepHydrated', function () {
    it('should return 1 liter when run 3 hours', function () {
        expect(keepHydrated(3)).toBe(1);
    });
    it('should return 3 liter when run 6.7 hours', function () {
        expect(keepHydrated(6.7)).toBe(3);
    });
})