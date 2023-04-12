
import {gooseFilter} from "./fillter";
describe('gooseFilter',()=> {
    it('should return an empty array when given an empty array', () => {
        expect(gooseFilter([])).toStrictEqual([]);
    });
    it('should return an array without "African" when given an array with "African" geese', () => {
        expect(gooseFilter(["African", "Mallard"])).toStrictEqual(["Mallard"]);
    });

    it('should return array of string  when given some birds', () => {
        expect(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Pilgrim", "Pilgrim","Toulouse", "Blue Swedish"])).toStrictEqual(["Mallard", "Hook Bill", "Crested",  "Toulouse", "Blue Swedish"])
    });
    it('should return 1 euro when given 1 mango', () => {
        expect(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])).toStrictEqual(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
    });
    it('should return 1 euro when given 2 mango', () => {
        expect(gooseFilter(["Mallard", "Barbary","Roman Tufted", "Hook Bill", "Blue Swedish","Steinbacher" ,"Crested"])).toStrictEqual(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
    });


})
