import "./Square.css";
interface Props {
  value: string;
  onSquareClick: () => any;
}

export function Square({ value, onSquareClick }: Props) {
  return (
    <button className="square" onClick={() => onSquareClick()}>
      {value}
    </button>
  );
}
