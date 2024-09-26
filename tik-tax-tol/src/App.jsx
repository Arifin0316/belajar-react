import { useState } from 'react';
import './App.css';

function Square({ value, onSquareClick }) {
  console.log (value)
  let actif = ''
  if(value === 'X') {
    actif = 'X'
  }else if(value === 'O'){
    actif = 'O'
  }
  return (
  <button className={"sqere " + actif}onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Pemenang: ' + winner;
  } else {
    status = 'Pemain selanjutnya: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="container">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        </div>
        <div className="board-row">
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          <Square value={squares[9]} onSquareClick={() => handleClick(9)} />
        </div>
        <div className="board-row">
          <Square value={squares[10]} onSquareClick={() => handleClick(10)} />
          <Square value={squares[11]} onSquareClick={() => handleClick(11)} />
          <Square value={squares[12]} onSquareClick={() => handleClick(12)} />
          <Square value={squares[13]} onSquareClick={() => handleClick(13)} />
          <Square value={squares[14]} onSquareClick={() => handleClick(14)} />
        </div>
        <div className="board-row">
          <Square value={squares[15]} onSquareClick={() => handleClick(15)} />
          <Square value={squares[16]} onSquareClick={() => handleClick(16)} />
          <Square value={squares[17]} onSquareClick={() => handleClick(17)} />
          <Square value={squares[18]} onSquareClick={() => handleClick(18)} />
          <Square value={squares[19]} onSquareClick={() => handleClick(19)} />
        </div>
        <div className="board-row">
          <Square value={squares[20]} onSquareClick={() => handleClick(20)} />
          <Square value={squares[21]} onSquareClick={() => handleClick(21)} />
          <Square value={squares[22]} onSquareClick={() => handleClick(22)} />
          <Square value={squares[23]} onSquareClick={() => handleClick(23)} />
          <Square value={squares[24]} onSquareClick={() => handleClick(24)} />
        </div>
      </div>
    </>
  );
}

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(25).fill(null)]); // Use 25 squares for 5x5 board
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Pergi ke langkah #' + move;
    } else {
      description = 'Pergi ke awal permainan';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    // Baris
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    
    // Kolom
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],

    // Diagonal
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20]
  ];

  // Cek setiap kemungkinan kemenangan
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

