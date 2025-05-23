
function NewsContents({day, likeCount, setLikeCount, content, changeDay, setChangeDay, dayArr, setDayArr}) {


    return(
        <>
            <div className='post-list'>
                <h4 className='day'>{day}<span onClick={() => {
                    setLikeCount(likeCount + 1);
                }}>🖤</span>{likeCount}</h4>
                    <p>{content}</p>
                    <button onClick={() => {
                        if (day === dayArr[0]) {
                            day = changeDay[0];
                            
                        } else if (day === dayArr[1]) {
                            day = changeDay[1];
                        } else if (day === dayArr[2]) {
                            day = changeDay[2];
                        }
                    }}>제목 변경</button>
                    
            </div>
        </>
            );
            }

            

export default NewsContents;