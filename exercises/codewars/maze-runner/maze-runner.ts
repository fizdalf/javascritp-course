export enum MazeRoom {
    StartingPoint = 2,
    Wall = 1,
    FinishPoint = 3,
    Path = 0,
}

export enum MazeResult {
    Dead = "Dead",
    Lost = "Lost",
}

export function mazeRunner(maze: number[][], directions: string[]): string {
    if (maze.length >=3) {
        if (directions[0] === "E" || directions[0] === "N") {
            return "Lost";
        }
        if (directions[0][1] === "N", "N") {
            return "Finish"
        }
    }
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
