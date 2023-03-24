import { BoardPrinter } from './BoardPrinter';
import { Board } from './Board';
export declare class ConsoleBoardPrinter implements BoardPrinter {
    print(board: Board): string;
    private renderLine;
    private getHeader;
    private getSpacing;
}
