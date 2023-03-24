/* eslint-disable prettier/prettier */
import {Board} from './Board';


export interface BoardPrinter {
    print(board:Board): string;
}
