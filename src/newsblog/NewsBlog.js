import './NewsBlog.css';
import NewsContents from './NewsContents';
import React, { useState } from 'react';

function NewsBlog() {
    

    let title = "React Study"
    let content = "내용 무"
    let [dayArr, setDayArr] = useState(['오늘의 뉴스', '어제의 뉴스', '그제의 뉴스'])
    let [changeDay, setChangeDay] = useState(['today 뉴스', 'yesterday 뉴스', 'the day before yesterday 뉴스'])
    let [likeCount, setLikeCount] = useState(0);
return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <p style={ {color:'orange', fontSize:'20px'}}>{title}</p>
            </div>
                
                {
                    dayArr.map((day) => {
                        return (
                            <NewsContents day={day} likeCount={likeCount} content={content} changeDay={changeDay} setLikeCount={setLikeCount} setChangeDay={setChangeDay} dayArr={dayArr} setDayArr={setDayArr} />
                            
                        )
                    })
                }
        </div>
    )

}

//export default NewsBlog;