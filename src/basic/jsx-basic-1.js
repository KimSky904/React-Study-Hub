import React, { useState } from "react"
import ReactDOM from "react-dom"


const Func = function(props) {
    const { value1, value2, whatever } = props
    return <p>{JSON.stringify(props)}</p>

}


// 내부에서 배열, 객체 참조도 가능하며 수식 사용 및 함수, 메소드 사용도 자유로움 (자바스크립트 표현식을 모두 사용 가능, 단, if 구문이나 for 구문은 사용 불가)
function ComponentTest() {
    return (
            <Func str="strrrr"/>
        )
    
} 
    
ReactDOM.render(<ComponentTest/>, document.getElementById("root")); 