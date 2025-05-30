import { useEffect, useState } from "react";

function checkBoard(squares) {
  if((squares[0] !== null) && (squares[0] === squares[1]) && (squares[1] === squares[2])) {
    return squares[0];
  }

  if((squares[3] !== null) && (squares[3] === squares[4]) && (squares[4] === squares[5])) {
    return squares[3];
  }

  if((squares[6] !== null) && (squares[6] === squares[7]) && (squares[7] === squares[8])) {
    return squares[6];
  }

  if((squares[0] !== null) && (squares[0] === squares[3]) && (squares[3] === squares[6])) {
    return squares[0];
  }

  if((squares[1] !== null) && (squares[1] === squares[4]) && (squares[4] === squares[7])) {
    return squares[1];
  }

  if((squares[2] !== null) && (squares[2] === squares[5]) && (squares[5] === squares[8])) {
    return squares[2];
  }

  if((squares[0] !== null) && (squares[0] === squares[4]) && (squares[4] === squares[8])) {
    return squares[0];
  }

  if((squares[2] !== null) && (squares[2] === squares[4]) && (squares[4] === squares[6])) {
    return squares[2];
  }

  return null;
}

function Square({ value, update }) {
  return (
    <button className="square" onClick={update}>
      {value}
    </button>
  );
}

export default function Board() {
  const [currentSymbol, setCurrentSymbol] = useState("O");
  const [squares, setSquares] = useState(Array(9).fill(null));

  function getClickHandler(idx) {
    return () => {
      setSquares({ ...squares, [idx]: currentSymbol });
      setCurrentSymbol(currentSymbol === "X" ? "O" : "X");
    };
  }

  useEffect(() => {
    const check = checkBoard(squares);
    if (check !== null) {
      console.log(check);
    };
  }, [squares]);

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} update={getClickHandler(0)} />
        <Square value={squares[1]} update={getClickHandler(1)} />
        <Square value={squares[2]} update={getClickHandler(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} update={getClickHandler(3)} />
        <Square value={squares[4]} update={getClickHandler(4)} />
        <Square value={squares[5]} update={getClickHandler(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} update={getClickHandler(6)} />
        <Square value={squares[7]} update={getClickHandler(7)} />
        <Square value={squares[8]} update={getClickHandler(8)} />
      </div>
    </>
  );
}
