import {MazeRoom, findStartingPoint} from "./maze-runner";


describe('findStartingPoint', () => {
    it('should return the verticalPosition 0 and horizontalPosition 0 when given a maze with just one cell that has the startingPoint', () => {
        const maze = [[MazeRoom.StartingPoint]];
        expect(findStartingPoint(maze)).toStrictEqual({verticalPosition: 0, horizontalPosition: 0});
    });
});
