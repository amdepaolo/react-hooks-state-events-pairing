import React from "react";

function Details({title, views, createdAt}){
    return(
        <React.Fragment>
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {createdAt}</p>
        </React.Fragment>
    )
}

export default Details;