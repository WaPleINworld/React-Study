import './Basic01.css';

function Basic01() {

    let msg = "hi";
    let state = "hungry";
    let flag = true;

    let hi = "";
    for(let i=0; i<5; i++){
        hi += "hi";
    }

    return (
        <div className="App">
            <h1>리액트 Basic01</h1>
            <p className="font-red">아무거나 글자</p>
            <p id="pid">GOD DAMN</p>
            {
                // 삼항 연산자
                // flag == true ? <h1>{msg}</h1> : <h1>{state}</h1>
            }
            {
                // && 연산자
                flag && <h1>{msg}</h1>
            }
            {
                // flag == false && <h1>{state}</h1>
                !flag && <h1>{state}</h1>
            }
            <p>{msg}</p>
            <p>{state}</p>
            <h4 style={ { color:'green', fontStyle:'italic' } }>{hi}</h4>
        </div>
    )

    // if(flag){
    // return (
    //     <div className="App">
    //         <h1>리액트 Basic01</h1>
    //         <p className="font-red">아무거나 글자</p>
    //         <p id="pid">GOD DAMN</p>

    //         <p>{msg}</p>
    //         <p>{state}</p>
    //         <h4 style={ { color:'green', fontStyle:'italic' } }>{h1}</h4>
    //     </div>
    // );
    // } else {
    //     return (
    //         <div className="App">
    //             <h1>{state}</h1>
    //         </div>
    //     )
    // }

// function Basic01() {

//     //리액트 컴포턴트에서 return은 최상위 단일 요소를 반환
//     return (
//         <>
//         <div>
//             <p></p>
//         </div>
//         <div><span></span></div>
//         </>
//     )
}

export default Basic01;