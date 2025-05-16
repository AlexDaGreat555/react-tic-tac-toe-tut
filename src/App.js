import { useState } from "react";

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  // Function to handle square click
  function handleClick(i) {
    // Check if the square is already filled
    if (squares[i]) {
      return;
    }
    const newSquares = squares.slice();
    // Update the clicked square with "X"
    if (xIsNext) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    // Update the state with the new squares array
    setSquares(newSquares);
    setXIsNext(!xIsNext); // Toggle the next player
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function Square({value, onSquareClick}) {
  return (
  <button 
    className="square"
    // Uses onSquareClick prop to handle click events
    onClick = {onSquareClick}
  > 
    {value}
  </button>
  );
}

export default Board;