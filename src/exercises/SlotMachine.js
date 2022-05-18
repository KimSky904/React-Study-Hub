import React, { useState } from "react"
import ReactDOM from "react-dom"


function SlotMachine(props) {
    const {one,two,three} = props
    let check = one===two && two === three
    return (
        <h2 style={(check && one==7)? {color:'red'} : null }>
            {
                (check)? "Congratulations!" : "FAILED"
            }
        </h2>
    )
}


ReactDOM.render(<SlotMachine one="7" two="7" three="7"/>, document.getElementById("root")); 