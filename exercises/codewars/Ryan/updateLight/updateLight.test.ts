import {updateLight} from "./updateLight";

describe('updateLight', function () {
    it('should return green when given red', function () {
        expect(updateLight('red')).toStrictEqual('green');
    });
    it('should return yellow when given green', function () {
        expect(updateLight('green')).toStrictEqual('yellow');
    });
})