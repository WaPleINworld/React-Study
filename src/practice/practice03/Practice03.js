import { Component } from "react";
import './Practice03.css';
import TextItem from "./TextItem";

function Practice03() {
    let NumArr = ['하나', '둘', '셋', '넷', '다섯'];
    let ContentArr = ['내용하나', '내용둘', '내용셋', '내용넷', '내용다섯'];
return (

<div className="App">

    {
        NumArr.map((Num, index) => {
            return (
                <TextItem Num={Num[index]} Content={ContentArr[index]} />
            )
        })
    }
    {/* <TextItem  Num={NumArr[0]} Content={ContentArr[0]}/>
    <TextItem  Num={NumArr[1]} Content={ContentArr[1]}/>
    <TextItem  Num={NumArr[2]} Content={ContentArr[2]}/>
    <TextItem  Num={NumArr[3]} Content={ContentArr[3]}/>
    <TextItem  Num={NumArr[4]} Content={ContentArr[4]}/> */}

</div>
);
}


export default Practice03;