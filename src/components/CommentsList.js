import React from "react";
import Comment from "./Comment";

function CommentsList({comments, showComments}){
    const commentsArray = comments.map(comment => {
        return(
            <Comment 
                user={comment.user} 
                text={comment.comment}
                key={comment.id}
            />
        )
    })

    return(
        <div>
            <h2>{comments.length} Comments</h2>
            {showComments? commentsArray: null}
        </div>
    )
}

export default CommentsList