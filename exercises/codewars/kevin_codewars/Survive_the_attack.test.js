const gameOFAttackAndDefence = require('./Survive_the_attack');

describe('gameOFAttackAndDefence', () => {
    it("should return true when given gameOFAttackAndDefence ", () => {
        expect(gameOFAttackAndDefence([], []).toBe(true))
    });
})
