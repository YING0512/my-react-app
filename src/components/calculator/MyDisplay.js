import React from 'react';

// MyDisplay 是一個接收 props 並呈現顯示區域的元件
function MyDisplay(props){
    return <div className='display'>{props.result}</div>
}

export default MyDisplay;
