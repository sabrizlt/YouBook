import React from "react";
import SingleComment from "./SingleComment";

const CommentsList = (props) => {
  return (
    <div>
      {props.comments && props.comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsList;
