import './Practice04.css';
import React, { useState } from 'react';

function Practice04() {  
    let [boxes, setBoxes] = useState([]);

    let [arr, setArr] = useState([1, 1]);

    return (
        <div>
            <div style={{margin:'20px'}}>
                <button onClick={() => {
                    // let temp = [...boxes];
                    // temp.push(<div className="box">박스</div>);
                    // setBoxes(temp);
                    let temp = [...arr, 0];
                    setArr(temp);
                }}>박스 추가</button>
            </div>
            <div className="box">박스</div>
            
            {boxes}
            {
                // boxes.map(() => {
                //     return <div className="box" key={index}>박스</div>
                // })
                arr.map(() => {
                    return <div className="box">박스</div>
                })
            }
        </div>
    );
}

export default Practice04;
