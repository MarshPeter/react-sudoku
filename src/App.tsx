import {solveSudoku} from "./services/SudokuSolver"
import SudokuTable from "./components/SudokuTable"

function App() {

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

  solveSudoku(testSudoku);

  const sudokuValues = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ]

  return (
    <div>
      <SudokuTable sudokuValues={sudokuValues}></SudokuTable>
    </div>
  )
}

export default App