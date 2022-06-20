import React from "react";
import Details from "./Details";

function Video({title, embedUrl, views, createdAt}){
    return(
    <div>
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
      <Details 
        title={title} 
        views={views} 
        createdAt={createdAt}/>
    </div>
    )
}

export default Video