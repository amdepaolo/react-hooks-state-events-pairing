import React from "react";

function Comment({user, text}){
    return (
        <div>
            <h3>{user}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Comment