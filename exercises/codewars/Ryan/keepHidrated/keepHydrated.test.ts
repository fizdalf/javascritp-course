import {keepHydrated} from "./keepHydrated";

describe('keepHydrated', function () {
    it('should return 1 liter when run 3 hours', function () {
        expect(keepHydrated(3)).toBe(1);
    });
})