import { NotImplementedError } from "../extensions/index.js";

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  let f = 0;
  const leni = matrix.length;
  const lenj = matrix[0].length;
  const r = [];
  for (let i = 0; i < leni; i++) {
    r[i] = [];
    for (let j = 0; j < lenj; j++) {
      r[i][j] = 0;
    }
  }
  for (let i = 0; i < leni; i++) {
    for (let j = 0; j < lenj; j++) {
      f = 0;
      for (let k = -1; k < 2; k++) {
        for (let l = -1; l < 2; l++) {
          const x = i + k;
          const y = j + l;
          if (
            x >= 0 &&
            x < leni &&
            y >= 0 &&
            y < lenj &&
            !(k === 0 && l === 0)
          ) {
            if (matrix[x][y] === true) f++;
          }
        }
      }
      r[i][j] = f;
    }
  }
  return r;
}
