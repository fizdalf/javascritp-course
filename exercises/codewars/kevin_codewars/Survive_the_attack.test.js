 const gameOFAttackAndDefence = require('./Survive_the_attack');

describe('gameOFAttackAndDefence', () => {
    it("should return false when given [] []", () => {
        expect(gameOFAttackAndDefence( [] ,[]).toBe(true))
    });
})
