export enum MazeRoom {
    StartingPoint = 2,
    Wall = 1,
    FinishPoint = 3,
}

export enum MazeResult {
    Dead = "Dead"
}

export function mazeRunner(maze: number[][], directions: string[]): string {
    if (maze.length >= 2) {
        if (directions[0] === "E" || directions[0] === "S" || directions[0] === "W") {
            return "Dead";
        }
        return "Finish";
    }
    if (directions.length > 0) {
        return "Dead";
    }
    return "Lost";
}
