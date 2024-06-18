import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 使用 ReactDOM 的 createRoot 方法來創建根元素的根 Fiber
const root = ReactDOM.createRoot(document.getElementById('root'));

// 渲染應用程式在根元素上，使用 React 的 StrictMode 嚴格模式包裹
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 如果你想測量應用程式的性能，可以傳入一個函式來記錄結果
// 例如：reportWebVitals(console.log)
// 或者傳送到分析端點。了解更多：https://bit.ly/CRA-vitals
reportWebVitals();
