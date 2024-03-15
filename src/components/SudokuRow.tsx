
interface Props {
  rowValues: number[];
}

export default function SudokuRow(props : Props) {
  return (
    <div className="flex">
      {props.rowValues.map(number => {
        return <div key={`${number}`} className="p-1 border border-black">
          <input type="text" value={`${number}`} className="w-8 text-center" />
        </div>
      })}
    </div>
  )
}
