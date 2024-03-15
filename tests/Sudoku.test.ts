import { beforeEach, describe, expect, test} from 'vitest';
import { rowHasNumber, colHasNumber, gridHasNumber, findGridExtremes } from '../src/services/SudokuSolver';

describe('Sudoku solver will', () => {

  const testSudoku = [
    [null, 4, 8, null, 6, null, 1, null, null],
    [null, null, null, 4, null, null, null, null, null],
    [6, null, null, 5, 7, null, null, null, 2],
    [null, 2, 1, null, null, null, 4, 6, null],
    [null, 6, null, 9, null, 4, null, 5, null],
    [null, 7, null, null, null, null, 3, 2, null],
    [1, null, null, null, 5, 2, null, null, 4],
    [null, null, null, null, null, 7, null, null, null],
    [null, null, 4, null, 1, null, 2, 7, null]
  ]

  test('return true if a number is in a sudoku row', () => {
    const testRow = testSudoku[0];

    expect(rowHasNumber(testRow, 4)).toBe(true);
  });

  test('return false if number is not in sudoku row', () => {

    const testRow = testSudoku[0];
    expect(rowHasNumber(testRow, 3)).toBe(false);
  });

  test('return true if a number is in a sudoku column', () => {});

  test('return false if a number is not in a sudoku column', () => {});

  test('return true if a number is in a sudoku grid', () => {});

  test('return false if a number is not in a sudoku grid', () => {});

  test('return the correct grid boundaries given a column and row')
})