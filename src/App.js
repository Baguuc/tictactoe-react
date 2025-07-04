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
    <td className="square">
      <button onClick={update}>
        {value}
      </button>
    </td>
  );
}

export default function Board() {
  const [currentSymbol, setCurrentSymbol] = useState("O");
  const [status, setStatus] = useState("Aktualnie stawia: O");
  const [winner, setWinner] = useState(null);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function getClickHandler(idx) {
    return () => {
      if(squares[idx]) return;
      if(winner) return;

      setSquares({ ...squares, [idx]: currentSymbol });
      setCurrentSymbol(currentSymbol === "X" ? "O" : "X");
    };
  }

  useEffect(() => {
    const check = checkBoard(squares);
    if (check !== null) {
      // ktoś wygrał
      setWinner(check);
    } else {
      // gra toczy się dalej
      setStatus(`Aktualnie stawia: ${currentSymbol}`);
    }
  }, [squares]);

  useEffect(() => {
    if(winner) setStatus(`${winner} wygrał!`);
  }, [winner]);

  return (
   <div className="board-root">
    <h2>{status}</h2>
     <table className="board">
     <tbody>
      <tr className="board-row">
          <Square value={squares[0]} update={getClickHandler(0)} />
          <Square value={squares[1]} update={getClickHandler(1)} />
          <Square value={squares[2]} update={getClickHandler(2)} />
        </tr>
        <tr className="board-row">
          <Square value={squares[3]} update={getClickHandler(3)} />
          <Square value={squares[4]} update={getClickHandler(4)} />
          <Square value={squares[5]} update={getClickHandler(5)} />
        </tr>
        <tr className="board-row">
          <Square value={squares[6]} update={getClickHandler(6)} />
          <Square value={squares[7]} update={getClickHandler(7)} />
          <Square value={squares[8]} update={getClickHandler(8)} />
        </tr>
     </tbody>
    </table>
   </div>
  );
}
