
import React, { useState } from 'react';
import './State.css';

function State02()  {


    let textArr = [];
    let text = "hi";

    for(let i=0; i<5; i++){
        text += "hi";
        textArr.push(<p>{text}</p>);
    }

    let numArr = [1,2,3,4,5];


    let msgArr = ['hi', 'hello', '안녕하세요', '반갑습니다'];


    let [colorArr, setColorArr] = useState(['red', 'blue', 'green', 'yellow', 'pink']);
    let [item, setItem] = useState({name:"핸드크림", price: 10000});

    return (
        <div>
            {textArr}
            <hr></hr>
            {
                numArr.map(() => {
                    return (
                        <h1>하이</h1>
                    )
                })
            }
            <hr></hr>
            {
                msgArr.map((msg) => {
                    return (
                        <p>안녕 {msg}</p>
                    )
                })
            }
            <hr></hr>
            {
                colorArr.map((item) => {
                    return (
                        <p>색상은 {item} 입니다</p>
                    )
                } )
            }
        </div>
    )
}

export default State02;