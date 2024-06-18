import React from "react";
import { useState } from "react";
import MySlider from "./MySlider";

// MyRGBPanel 是一個可以控制 RGB 色彩的元件
function MyRGBPanel() {
    // 定義三個狀態變數來保存紅、綠、藍色值，並初始化為 128
    const [r, setR] = useState(128);
    const [g, setG] = useState(128);
    const [b, setB] = useState(128);

    // 更新紅色值的函式
    const updateR = (v) => setR(v);
    // 更新綠色值的函式
    const updateG = (v) => setG(v);
    // 更新藍色值的函式
    const updateB = (v) => setB(v);

    // 定義一個 CSS 樣式物件，用於設置 RGB 面板的樣式
    const rgbCss = {
        border: "1px solid blue", // 設置邊框顏色為藍色
        borderRadius: "20px", // 設置邊框圓角
        width: "300px", // 設置寬度
        display: "flex", // 設置為彈性盒子
        flexDirection: "column", // 垂直排列子元素
        padding: "20px", // 設置內距
        justifyContent: "center", // 子元素在主軸上居中
        alignItems: "center", // 子元素在交叉軸上居中
        margin: "auto", // 水平置中
    };

    return (
        <>
            <div style={rgbCss}>
                <h2 style={{ color: "red" }}>
                    目前色彩
                </h2>
                <div
                    style={{
                        width: "250px", // 設置色彩顯示區域的寬度
                        height: "100px", // 設置色彩顯示區域的高度
                        backgroundColor: `rgb(${r}, ${g}, ${b})`, // 設置背景色為當前的 RGB 值
                    }}
                />
                <span>R: </span>
                {/* 傳遞更新紅色值的函式給 MySlider */}
                <MySlider onChange={updateR} />
                <span>G: </span>
                {/* 傳遞更新綠色值的函式給 MySlider */}
                <MySlider onChange={updateG} />
                <span>B: </span>
                {/* 傳遞更新藍色值的函式給 MySlider */}
                <MySlider onChange={updateB} />
            </div>
        </>
    );
}

export default MyRGBPanel;
