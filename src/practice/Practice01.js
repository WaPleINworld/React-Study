import { useState } from "react";

function Practice01() {

    let [num, setNum] = useState(0);

    return (

        <div className="App">
            <button onClick={()=>{
                setNum(num + 2);
                console.log(num);
            }}>짝수출력</button>
            <a className="font-red">{num}</a>
        </div>

    );

}

export default Practice01;