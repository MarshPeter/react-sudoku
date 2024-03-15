import SudokuTable from "../components/SudokuTable";

export function solveSudoku(sudoku: (number | null)[][]) {
  // get given a sudoku to solve
  // while not solved solution
  //  look at the top left most available square
  //  assume that square holds a 1
  //  while assumption is less than 10
  //    check if row is valid with the assumption
  //    check if column is valid with the assumption
  //    check if grid is valid with the assumption
  //    if all valid, break loop
  //    if not valid, add 1 to assumption
  //  if assumption is not valid, then retreat to earlier square and increment there
  //    if no more squares to go back to, then solution is not possible
  //  save sudoku state, and then go to the next top left most square
  //  if no more sudoku square, solution is found
  // return solved sudok
  const firstRow = sudoku[0];

  console.log(colHasNumber(sudoku, 0, 5));

}

// returns true if row has number in it already
export function rowHasNumber(sudokuRow : (number | null)[], n: number) : boolean {
  
  for (let i = 0; i < sudokuRow.length; i++) {
    if (sudokuRow[i] === n) {
      return true;
    }
  }
  
  return false;
}

// returns true if col has number in it already
export function colHasNumber(sudoku : (number | null)[][], col: number, n: number) : boolean {

  for (let i = 0; i < sudoku.length; i++) {
    if (sudoku[i][col] === n) {
      return true;
    }
  }

  return false;
}

// return true if grid has number in it already
export function gridHasNumber(sudoku : (number | null)[][], row: number, col: number, n: number) : boolean {

}

// return grid extremes for current row and column index
// i.e row=0, col=1, returns [(0, 0), (2, 2)], row=3, col=3, returns [(3, 3), (5, 5)]
export function findGridExtremes(row, col) {}


