import {MazeDirections, MazeResult, MazeRoom, mazeRunner} from './maze-runner';

describe('maze runner', () => {
    it('should return "Lost" when given an 1x1 maze that only has starting point and no directions', () => {
        const directions: string[] = [];
        const maze = [[MazeRoom.StartingPoint]];
        expect(mazeRunner(maze, directions)).toBe(MazeResult.Lost);
    });
    it('should return "Dead" when given an 1x1 maze that only has starting point and any direction', () => {
        const directions: string[] = [MazeDirections.North];
        const maze = [[MazeRoom.StartingPoint]];
        expect(mazeRunner(maze, directions)).toBe(MazeResult.Dead);
    });
    it('should return "Finish" when we given one step to the North and it is the finish point', () => {
        const maze = [
            [MazeRoom.FinishPoint, MazeRoom.Wall],
            [MazeRoom.StartingPoint, MazeRoom.Wall],
        ];
        expect(mazeRunner(maze, [MazeDirections.North])).toBe(MazeResult.Finish);
    });
    it('should return "Dead" when given an 2x2 maze with a starting point, and the one direction that leads to outside the maze', () => {
        const maze = [
            [MazeRoom.FinishPoint, MazeRoom.Wall],
            [MazeRoom.StartingPoint, MazeRoom.Wall],
        ];
        expect(mazeRunner(maze, [MazeDirections.South])).toBe(MazeResult.Dead);
    });
    it('should return "Dead" when we are given one step to the West and step out of the maze', () => {
        const maze = [
            [MazeRoom.FinishPoint, MazeRoom.Wall],
            [MazeRoom.StartingPoint, MazeRoom.Wall],
        ];
        expect(mazeRunner(maze, [MazeDirections.West])).toBe(MazeResult.Dead);
    });
    it('should return "Dead" when we are given one step to the East and we find a wall', () => {
        const maze = [
            [MazeRoom.FinishPoint, MazeRoom.Wall],
            [MazeRoom.StartingPoint, MazeRoom.Wall],
        ];
        expect(mazeRunner(maze, [MazeDirections.East])).toBe(MazeResult.Dead);
    });
    it('should return "Lost" when we are given one step to the East and we find a path', () => {
        const maze = [
            [MazeRoom.FinishPoint, MazeRoom.Wall],
            [MazeRoom.StartingPoint, MazeRoom.Path],
        ];
        expect(mazeRunner(maze, [MazeDirections.East])).toBe(MazeResult.Lost);
    });

    it('should return "Finish" when we are given one step to the east and we find the finish point', () => {
        const maze = [
            [MazeRoom.Path, MazeRoom.Path],
            [MazeRoom.StartingPoint, MazeRoom.FinishPoint],
        ];
        expect(mazeRunner(maze, [MazeDirections.East])).toBe(MazeResult.Finish);
    });
    it('should return "Lost" when we are given one step to the south and we find a path', () => {
        const maze = [
            [MazeRoom.StartingPoint, MazeRoom.Path],
            [MazeRoom.Path, MazeRoom.FinishPoint],
        ];
        expect(mazeRunner(maze, [MazeDirections.South])).toBe(MazeResult.Lost);
    });
});

/**
 *     N
 *    W E
 *     S
 */
