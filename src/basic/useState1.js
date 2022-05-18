import React, { useState } from "react"
import ReactDOM from "react-dom"


function Stating() {
    const [count,setCount] = useState(0)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}/>
            <button onClick={() => setCount(prev => prev - 1)}/>
        </div>
    )
}

ReactDOM.render(<Stating/>, document.getElementById("root")); 