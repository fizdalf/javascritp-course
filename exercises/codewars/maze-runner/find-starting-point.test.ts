import {findStartingPoint, MazeRoom} from "./maze-runner";


describe('findStartingPoint', () => {
    it('should return the verticalPosition 0 and horizontalPosition 0 when given a maze with just one cell that has the startingPoint', () => {
        const maze = [
            [MazeRoom.StartingPoint]
        ];
        expect(findStartingPoint(maze)).toStrictEqual({verticalPosition: 0, horizontalPosition: 0});
    });
    it('should return the verticalPosition 1 and horizontalPosition 0 when given a maze with the startingPoint of 2x2 in the left corner bottom', () => {
        const maze = [
            [MazeRoom.Wall, MazeRoom.FinishPoint],
            [MazeRoom.StartingPoint, MazeRoom.Wall]
        ];
        expect(findStartingPoint(maze)).toStrictEqual({verticalPosition: 1, horizontalPosition: 0});
    });
    it('should return the verticalPosition 0 and horizontalPosition 0 when given a maze with the startingPoint of 2x2 in the left top corner', () => {
        const maze = [
            [MazeRoom.StartingPoint, MazeRoom.FinishPoint],
            [MazeRoom.Wall, MazeRoom.Wall]
        ];
        expect(findStartingPoint(maze)).toStrictEqual({verticalPosition: 0, horizontalPosition: 0});
    });
    it('should return the verticalPosition 0 and horizontalPosition 1 when given a maze with the startingPoint of 2x2 in the right top corner', () => {
        const maze = [
            [MazeRoom.FinishPoint, MazeRoom.StartingPoint],
            [MazeRoom.Wall, MazeRoom.Wall]
        ];
        expect(findStartingPoint(maze)).toStrictEqual({verticalPosition: 0, horizontalPosition: 1});
    });
    it('should return the verticalPosition 1 and horizontalPosition 1 when given a maze with the startingPoint of 2x2 in the right bottom corner', () => {
        const maze = [
            [MazeRoom.FinishPoint, MazeRoom.Wall],
            [MazeRoom.Wall, MazeRoom.StartingPoint]
        ];
        expect(findStartingPoint(maze)).toStrictEqual({verticalPosition: 1, horizontalPosition: 1});
    });
});
