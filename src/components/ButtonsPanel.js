import React from "react";  

function ButtonsPanel({likes, dislikes, showComments, onUpClick, onDownClick, onCommentClick}){
    const commentText = showComments? "Hide Comments": "Show Comments";


    return(
        <div>
            <span>
                <button onClick={onUpClick}>{likes} 👍</button>
                <button onClick={onDownClick}>{dislikes} 👎</button>
            </span>
            <button onClick={onCommentClick}>{commentText}</button> 
        </div>
    )
}

export default ButtonsPanel