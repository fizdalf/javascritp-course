import {BoardPrinter} from './BoardPrinter';
import {Board} from './Board';

export class HtmlBoardPrinter implements BoardPrinter {
    print(board: Board): string {
        return "<html></html>"
    }
}
