import { Board } from "./board/Board.mjs";

const board = new Board(5, 5);
const tile = board.getTile(1, 1);

console.log(tile);
