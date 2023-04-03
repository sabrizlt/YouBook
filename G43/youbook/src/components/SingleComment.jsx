import React from "react";
import { Card } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Text>{comment.comment}</Card.Text>
        <Card.Text>Rating: {comment.rate}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleComment;
