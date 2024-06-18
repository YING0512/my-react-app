import { useState } from "react";

// MySlider 是一個可調節範圍的滑桿元件，接收 onChange 函式作為 props
function MySlider({onChange}) {
  // 定義一個狀態變數 value，並初始化為 128
  const [value, setValue] = useState(128);

  // 當滑桿的值改變時觸發的事件處理函式
  const handleChange = (e) => {
    // 更新狀態變數 value
    setValue(e.target.value);
    // 如果存在 onChange 函式，則調用該函式並傳入新的值
    if (onChange){
      onChange(e.target.value);
    }
  };

  return (
    <div>
      <input
        type="range" // 輸入類型為範圍
        width="200" // 設置滑桿的寬度
        min="0" // 最小值為 0
        max="255" // 最大值為 255
        value={value} // 設置滑桿的當前值
        onChange={handleChange} // 當滑桿的值改變時觸發 handleChange 函式
      />
      <span>{value}</span> {/* 顯示當前的滑桿值 */}
    </div>
  );
}

export default MySlider;
