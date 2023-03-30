import React from "react";
import Card from "react-bootstrap/Card";

function AllTheBooks(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.book.img} />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>{props.book.category}</Card.Text>
        <Card.Text>${props.book.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AllTheBooks
