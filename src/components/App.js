import React, { useState } from "react";
import video from "../data/video.js";
import ButtonsPanel from "./ButtonsPanel.js";
import Video from "./Video.js";
import CommentsList from "./CommentsList.js";

// The application has the following features:

// When the app loads, display a video along with its details and a list of all the comments
// When a user clicks on the "👍" button, the number of upvotes for the video should increase
// When a user clicks on the "👎" button, the number of downvotes for the video should increase
// When the user clicks the "Hide Comments" button, the comments should be removed from the page, and the button text should change to "Show Comments". When the button is clicked again, it should toggle back to showing the comments.

// components:
// Video
// -details
// ButtonsPanel state
// Comments
// -comment


function App() {
  console.log("Here's your data:", video);
  const [upVotes, setUpVotes] = useState(video.upvotes)
  const [downVotes, setDownVotes] = useState(video.downvotes)
  const [showComments, setComments] = useState(true)

  function likeVideo(){
    let newUpVotes = upVotes + 1
    setUpVotes(newUpVotes)
  }

  function dislikeVideo(){
    let newDownVotes = downVotes + 1;
    setDownVotes(newDownVotes)
  }

  function commentClick(){
    setComments(!showComments)
  }

  return (
    <div className="App">
      <Video 
      title={video.title} 
      embedUrl={video.embedUrl}
      views={video.views}
      createdAt={video.createdAt} 
      />
      <ButtonsPanel
      likes={upVotes}
      dislikes={downVotes}
      showComments = {showComments}
      onUpClick={likeVideo}
      onDownClick={dislikeVideo}
      onCommentClick={commentClick}
      />
      <CommentsList
      showComments = {showComments}
      comments={video.comments}
      />
    </div>
  );
}

export default App;
