import {findStartingPoint, MazeRoom} from "./maze-runner";


describe('findStartingPoint', () => {
    it('should return the verticalPosition 0 and horizontalPosition 0 when given a maze with just one cell that has the startingPoint', () => {
        const maze = [[MazeRoom.StartingPoint]];
        expect(findStartingPoint(maze)).toStrictEqual({verticalPosition: 0, horizontalPosition: 0});
    });
    it('should return the verticalPosition 1 and horizontalPosition 0 when given a maze with the startingPoint of 2x2 in the left corner bottom', () => {
        const maze = [[MazeRoom.Wall], [MazeRoom.FinishPoint],
                      [MazeRoom.StartingPoint], [MazeRoom.Wall]];
        expect(findStartingPoint(maze)).toStrictEqual({verticalPosition: 1, horizontalPosition: 0});
    });
    it('should return the verticalPosition 1 and horizontalPosition 1 when given a maze with the startingPoint of 2x2 in the right corner bottom', () => {
        const maze = [[MazeRoom.Wall], [MazeRoom.FinishPoint],
                      [MazeRoom.Wall], [MazeRoom.StartingPoint]];
        expect(findStartingPoint(maze)).toStrictEqual({verticalPosition: 1, horizontalPosition: 1});
    });
});
