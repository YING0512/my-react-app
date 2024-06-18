import React from "react";
import "./tictactoe.css";

// Square 是一個單一方格元件，接收 value 和 onSquareClick 作為 props
function Square({ value, onSquareClick }) {
  return (
    // 當按鈕被點擊時，觸發 onSquareClick 函式
    <button className="square" onClick={onSquareClick}>
      {value} {/* 顯示方格的值 */}
    </button>
  );
}

export default Square;
