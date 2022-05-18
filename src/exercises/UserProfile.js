import React, { useState } from "react"
import ReactDOM from "react-dom"

const userDefault = {
    userName : "NAME",
    userAge : 18,
    emailAddress : "sss"
}

function UserProfile() {
    const [userInfo, setUserInfo] = useState(userDefault)


    return (
        <h1>
            {userInfo.userName}
            {userInfo.userAge}
            {userInfo.emailAddress}

            <button onClick={() => setUserInfo({...userInfo,userName:"SKY"})}>버튼</button>
        </h1>
    
    )
}

ReactDOM.render(<UserProfile/>, document.getElementById("root")); 

