import React, { useState } from "react";
import MyDisplay from "./MyDisplay";
import MyButton from "./MyButton";
import "./MyCalculator.css";

function MyCalculator() {
  // 定義一個狀態變數 result 並初始化為 "0"
  const [result, setResult] = useState("0");

  // handleClick 是 MyButton 的事件處理常式
  const handleClick = (value) => {
    // 根據按鈕的值進行不同的操作
    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
      case "+":
      case "-":
      case "*":
      case "/":
        // 如果當前結果為 "0"，則直接替換為新值，否則將新值附加到當前結果後面
        if (result === "0") {
          setResult(value);
        } else {
          setResult(result + value);
        }
        break;
      case "=":
        // 使用 eval 函式計算結果，並將其轉換為字串
        setResult(eval(result).toString());
        break;
      case "c":
        // 清空結果
        setResult("");
        break;
      case "+/-":
        // 將當前結果轉換為負數
        setResult((parseFloat(result) * -1).toString());
        break;
      case "%":
        // 將當前結果轉換為百分比
        setResult((parseFloat(result) / 100).toString());
        break;
      default:
        break;
    }
  };

  return (
    <div className="calculator">
      {/* 傳遞 result 狀態給 MyDisplay 元件 */}
      <MyDisplay result={result} />
      {/* 傳遞 handleClick 函式給 MyButton 元件 */}
      <MyButton buttonClicked={handleClick} />
    </div>
  );
}

export default MyCalculator;
