import './NewsBlog.css';
import { useState } from 'react';
import Modal from './Modal';

function NewsBlog(){

    let title = "React Study";

    let int = null

    let [news1, setNews1] = useState('오늘의 뉴스');
    let [news2, setNews2] = useState('어제의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);
    // ['Today News', '어제의 뉴스', '내일의 뉴스']

    let [likeCount1, setLikeCount1] = useState(0);
    let [likeCount2, setLikeCount2] = useState(0);
    let [likeCount3, setLikeCount3] = useState(0);

    let [likeCountArr, setLikeCountArr] = useState( [0, 0, 0] );

    let [showModal, setShowModal] = useState(false);
    // 0 1

    let [selectedTitle, setSelectedTitle] = useState('');
    let [selectedLikeCount, setSelectedLikeCount] = useState(0);

    //input 값을 저장할 변수
    let [inputText, setInputText] = useState('');

    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <p style={ {color:"orange", fontSize:'20px'} }>{title}</p>
            </div>

            <div>
                <input type="text" id="input_news" value={inputText} onChange={(event)=>{
                //console.log(event);
                console.log(event.target.value);
                setInputText(event.target.value);
                }}></input>
                <button onClick={()=>{

                    likeCountArr.push(0); //좋아요 카운트 배열에 0 추가

                    //입력된 값을 제목 배열에 추가
                    //입력된 값 : input 요소에서 onChange 가 발생할때 -> inputText state변수에 저장되어 있음.
                    //제목배열 news 배열변수에 추가 -> 리렌더링 -> news배열의 갯수만큼 반복(map) 화면에 표시

                    //입력값이 있는 경우만~
                    if(inputText != '') {
                        let temp = [...news]; //기존 배열 복사
                        temp.push(inputText); //복사한 배열에 추가
                        setNews(temp); //기존 배열에 저장



                        //배열state변수 바꾸는 법 : 배열 복사 -> 값 변경/추가/삭제 -> set함수로 원래 배열에 저장
                        setInputText(''); //공백 -> input value={inputText}
                    } else {
                        alert('값을 입력하세요');
                        setInputText(''); //공백 -> input value={inputText}
                    }

                    /*

                    let title = document.getElementById('input_news').value;
                    let temp = [...news];
                    temp.push(title);
                    setNews(temp);

                    document.getElementById('input_news').value = '';

                    */

                }}>등록</button>
            </div>

                {
                news.map((item, index)=>{ // 0 1 2
                //return <div className='post-list'>
                return (
                <div className='post-list' key={index}>
                <h4 onClick={()=>{
                setShowModal(!showModal);
                setSelectedTitle(item);
                setSelectedLikeCount(likeCountArr[index]);
                }}>{item} <span style={{color:'red'}}  onClick={(event)=>{

                event.stopPropagation();

                let temp = [...likeCountArr];
                temp[index] += 1;
                setLikeCountArr(temp);

                }}>♥</span>{likeCountArr[index]}</h4>
                <p>내용 무</p>
                <button onClick={()=>{
                    //삭제
                    let temp = [...news];
                    temp.splice(index, 1); //index부터 1개 삭제
                    setNews(temp);

                    let temp2 = [...likeCountArr];
                    temp2.splice(index, 1); //index부터 1개 삭제
                    setLikeCountArr(temp2);
                }}>삭제</button>
        </div>
    )

    })
    }

    {
        //showModal == true ? <Modal/> : null
        //props 전달
        // 변수, 배열, 객체, 함수, 요소(컴포넌트)
        showModal && <Modal title={selectedTitle} likeCount={selectedLikeCount}
        news={news} setNews={setNews}
        bgColor='lightblue'/>
    }

    </div>
);
}

export default NewsBlog;