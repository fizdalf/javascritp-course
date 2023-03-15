import {MazeResult, MazeRoom, mazeRunner} from './maze-runner';

describe('maze runner', () => {
    it('should return "Lost" when given an 1x1 maze that only has starting point and no directions', () => {
        const directions: string[] = [];
        const maze = [[MazeRoom.StartingPoint]];
        expect(mazeRunner(maze, directions)).toBe("Lost");
    });
    it('should return "Dead" when given an 1x1 maze that only has starting point and any direction', () => {
        const directions: string[] = ["N"];
        const maze = [[MazeRoom.StartingPoint]];
        expect(mazeRunner(maze, directions)).toBe(MazeResult.Dead);
    });
    it('should return "Finish" when given an 2x2 maze with a starting point, and the one direction that leads to the finish point', () => {
        const directions: string[] = ["N"];
        const maze = [
            [MazeRoom.FinishPoint, MazeRoom.Wall],
            [MazeRoom.StartingPoint, MazeRoom.Wall],
        ];
        expect(mazeRunner(maze, directions)).toBe("Finish");
    });
    it('should return "Finish" when given an 2x2 maze with a starting point, and the one direction that leads to a wall', () => {
        const directions: string[] = ["E"];
        const maze = [
            [MazeRoom.FinishPoint, MazeRoom.Wall],
            [MazeRoom.StartingPoint, MazeRoom.Wall],
        ];
        expect(mazeRunner(maze, directions)).toBe(MazeResult.Dead);
    });
    it('should return "Dead" when given an 2x2 maze with a starting point, and the one direction that leads to outside the maze', () => {
        const maze = [
            [MazeRoom.FinishPoint, MazeRoom.Wall],
            [MazeRoom.StartingPoint, MazeRoom.Wall],
        ];
        expect(mazeRunner(maze, ["S"])).toBe(MazeResult.Dead);
        expect(mazeRunner(maze, ["W"])).toBe(MazeResult.Dead);
    });
    it('should return "Lost" when given an 2x2 maze with a starting point, and the one direction that leads to a path', () => {
        const maze = [
            [MazeRoom.FinishPoint, 0],
            [MazeRoom.StartingPoint, 0],
        ];
        expect(mazeRunner(maze, ["E"])).toBe("Lost");
    });
});

/**
 *     N
 *    W E
 *     S
 */
