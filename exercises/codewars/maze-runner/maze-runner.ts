export enum MazeRoom {
    StartingPoint = 2,
    Wall = 1,
    FinishPoint = 3,
    Path = 0,
}

export enum MazeResult {
    Dead = "Dead",
    Lost = "Lost",
    Finish = "Finish"
}

export function mazeRunner(maze: number[][], directions: string[]): string {


    function move(horizontalPosition: number, verticalPosition: number) {
        if (directions[0] === MazeDirections.East) {
            horizontalPosition += 1;
        }
        if (directions[0] === MazeDirections.West) {
            horizontalPosition -= 1;
        }
        if (directions[0] === MazeDirections.North) {
            verticalPosition -= 1;
        }
        if (directions[0] === MazeDirections.South) {
            verticalPosition += 1;
        }
        return {horizontalPosition, verticalPosition};
    }

    function isOutsideMaze(verticalPosition: number, horizontalPosition: number) {
        return verticalPosition > 1 || verticalPosition < 0 || horizontalPosition > 1 || horizontalPosition < 0;
    }

    function functionality(horizontalPosition: number, verticalPosition: number) {
        const __ret = move(horizontalPosition, verticalPosition);
        horizontalPosition = __ret.horizontalPosition;
        verticalPosition = __ret.verticalPosition;
        if (isOutsideMaze(verticalPosition, horizontalPosition)) {
            return MazeResult.Dead;
        }

        if (maze[verticalPosition][horizontalPosition] === MazeRoom.Path) {
            return MazeResult.Lost;
        }
        if (maze[verticalPosition][horizontalPosition] === MazeRoom.FinishPoint) {
            return MazeResult.Finish;
        }
        if (maze[verticalPosition][horizontalPosition] === MazeRoom.Wall) {
            return MazeResult.Dead;
        }

        return MazeResult.Dead;
    }

    if (maze.length >= 2) {
        let verticalPosition = 1;
        let horizontalPosition = 0;
        return functionality(horizontalPosition, verticalPosition);
    }


    if (directions.length > 0) {
        return MazeResult.Dead;
    }
    return MazeResult.Lost;
}
