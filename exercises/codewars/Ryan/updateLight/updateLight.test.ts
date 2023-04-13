import {updateLight} from "./updateLight";

describe('updateLight', function () {
    it('should return green when given red', function () {
        expect(updateLight('red')).toStrictEqual('green');
    });
})