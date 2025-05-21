import { useState } from "react";

function State01() {

    //

    // 일반 js 변수
    let cnt = 0;

    // State 변수
    // React Hooks
    // useState -> 상태를 저장하는 변수
    // 화면이 리렌더링 될 때마다 상태를 저장하는 변수
    // set함수를 통해서 state변수값이 변경되면 -> 화면 리렌더링

    // const|let [변수명, set함수명] = useState(초기값);

    let [cnt2, setCnt2] = useState(0);

    return (

        <div className="App">
            <h1>State01</h1>
            <p>{cnt}</p>
            <button onClick={()=>{
                //버튼 클릭 시 cnt 증가
                cnt++;
                console.log(cnt);
            }}>증가</button>

            <p>{cnt2}</p>
            <button onClick={()=>{
                //버튼 클릭 시 cnt2 증가
                // setCnt2(cnt2 + 1);
                // cnt2++; //state변수를 그냥 변경. 재랜더링이 안됨
                setCnt2(cnt2 + 1); //state변수를 변경. 재랜더링이 됨 
                // setCnt2(매개변수)
                // this.cnt2 = 매개변수
                console.log(cnt2);
            }}>cnt2 증가</button>
        </div>


    );


}

export default State01;