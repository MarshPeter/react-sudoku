import SudokuRow from "./SudokuRow";

interface Props {
  sudokuValues: number[][]
}

let index = 0;


export default function SudokuTable(props: Props) {
  return (
    <div>
      {props.sudokuValues.map(rowValues => {
        return <SudokuRow key={index++} rowValues={rowValues}></SudokuRow>
      })}
    </div>
  )
}
