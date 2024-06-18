import React from "react";
import Square from "./Square";
import "./tictactoe.css";

// Board 是井字棋的遊戲板元件
function Board({ xIsNext, squares, onPlay }) {
  // 當方格被點擊時的事件處理函式
  const handleClick = (i) => {
    // 如果已經有贏家或該方格已經被填充，則直接返回
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    // 創建 squares 的副本
    const nextSquares = squares.slice();
    // 根據當前是 X 還是 O 來更新方格的值
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // 調用 onPlay 函式來更新父元件的狀態
    onPlay(nextSquares);
  };

  // 計算贏家的函式
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i <= lines.length - 1; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }
    return null;
  };

  // 計算當前的贏家
  const winner = calculateWinner(squares);
  // 根據贏家情況來設置狀態訊息
  let status = winner
    ? `贏家: ${winner}`
    : `下一個玩家: ${xIsNext ? "X" : "O"}`;

  return (
    <>
      <div className="status">{status}</div>
      <div>
        {/* 為每個方格設置對應的值和點擊事件處理函式 */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default Board;
