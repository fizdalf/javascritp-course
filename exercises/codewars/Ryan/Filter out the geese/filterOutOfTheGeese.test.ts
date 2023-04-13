import {filterOutOfTheGeese} from './filterOutOfTheGeese';

describe('filterOutOfTheGeese', ()=> {
    it('should get an array and get back the same array', function () {
        expect(filterOutOfTheGeese( ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]))
    .toStrictEqual(["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
    });
    it('should get an array and take out the words from the geese, and return the array without them', function () {
        expect(filterOutOfTheGeese(["Mallard", "African", "Hook Bill", "Crested", "Blue Swedish"]))
            .toStrictEqual(["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
    });
});