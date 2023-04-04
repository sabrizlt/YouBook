import React, { useState, useEffect } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

function CommentArea(props) {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzYTExNWM1NmIzNjAwMTMzZmU1NWYiLCJpYXQiOjE2ODA1MzMwNTksImV4cCI6MTY4MTc0MjY1OX0.Idm_V78wfacjBZIGhuM2W9afSbr3UYJ6xSsknp_hHvY",
          },
        }
      );
      const data = await response.json();
      setComments(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      <CommentsList comments={comments} />
      <AddComment bookId={props.asin} fetchComments={fetchComments} />
    </div>
  );
}

export default CommentArea;
