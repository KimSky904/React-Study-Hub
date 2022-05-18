

import React, { useState } from "react"
import ReactDOM from "react-dom"


function ActionLink() {
    function handleClick(e) {
        // 이벤트 객체의 preventDefault 메소드 호출하여 기본 동작(링크로 이동)을 막을 수 있음
         e.preventDefault();
        console.log('The link was clicked.');
    }

    return <a href="#" onClick={handleClick}>Click me</a>;
}

ReactDOM.render(<ActionLink/>, document.getElementById("root")); 