const hasSurvived = require('./ryan-Survive_The_Attack');

describe(`hasSurvived`, () => {
    it('should return "true" when given "[] []"', () => {
        expect(hasSurvived([], [])).toBe("true");
    });
  //  it('should return "false" when given "[1] [1]"', () => {
  //      expect(surviveTheAttack([1], [1])).toBe("false");
  //  });
  //  it('should return "false" when given "[2] [2]"', () => {
 //       expect(surviveTheAttack([1], [1])).toBe("false");
  //  });
})
