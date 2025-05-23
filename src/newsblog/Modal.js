import React, { useState } from 'react';

function Modal(props){

    let [num, setNum] = useState(10);

    return(
        <div style={{backgroundColor: 'gray'}}>
            <h3>{props.title}♥</h3>
            <p>날짜</p>
            <p>상세내용</p>

            <button onClick={() => {
                // 이 버튼을 눌렀을때
                // 첫번째 제목 오늘의 뉴스 -> today news
                let temp = [...props.news];
                temp[0] = 'today news';
                props.setNews(temp);
            }}>제목 변경</button>
        </div>
    )
}

export default Modal;