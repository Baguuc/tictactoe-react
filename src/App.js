import {useState} from 'react';

function Square({value, update}) {
  return <button className="square" onClick={update}>{value}</button>;
}

export default function Board() {
  const [currentSymbol, setCurrentSymbol] = useState('O');
  const [squares, setSquares] = useState(Array(9).fill(null));

  function getClickHandler(idx) {
    return () => {
      setSquares({ ...squares, [idx]: currentSymbol });
      setCurrentSymbol(currentSymbol === 'X' ? 'O' : 'X');
      checkBoard(squares);
    };
  }

  return <>
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
  </>;
}