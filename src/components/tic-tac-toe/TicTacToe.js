import React, { useState } from "react";
import Board from "./Board";

// TicTacToe 是井字遊戲的主元件
function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]); // 設置遊戲歷史記錄的狀態
  const [currentMove, setCurrentMove] = useState(0); // 設置當前移動步數的狀態
  const xIsNext = currentMove % 2 === 0; // 判斷當前是 X 還是 O 的回合
  const currentSquares = history[currentMove]; // 當前的棋盤狀態

  // 處理每次下棋的函式，更新歷史記錄和當前步數
  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  // 產生遊戲歷程中的每個步驟按鈕
  const moves = history.map((squares, move) => {
    const jumpTo = (nextMove) => setCurrentMove(nextMove);
    let description = move > 0 ? `回到第 ${move} 步` : "遊戲開始";
    // 如果是回到特定步數，顯示對應的描述
    // if (move > 0) {
    //   description = "回到第 " + move + " 步";
    // } else {
    //   description = "遊戲開始";
    // }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        {/* 傳遞遊戲所需的 props 給 Board 元件 */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <h4>遊戲歷程</h4>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default TicTacToe;
