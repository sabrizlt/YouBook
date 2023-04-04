import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./AllTheBooks.css";

const AllTheBooks = ({ book }) => {
  const [selected, setSelected] = useState(false);
  const [showAddComment, setShowAddComment] = useState(false);
  const [comment, setComment] = useState("");
  const [selectedRate, setSelectedRate] = useState(1);

  useEffect(() => {}, []);
  const handleSelect = () => {
    setSelected(!selected);
  };

  const handleAddCommentClick = () => {
    setShowAddComment(true);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRateChange = (event) => {
    setSelectedRate(parseInt(event.target.value));
  };

  const handleSubmitComment = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzYTExNWM1NmIzNjAwMTMzZmU1NWYiLCJpYXQiOjE2ODA1MzQ4NzYsImV4cCI6MTY4MTc0NDQ3Nn0.4OqNYZs4v3Tln8FqZUFTkF6UicJelPkzLeapmZjw_2k",
      },
      body: JSON.stringify({
        comment: comment,
        rate: selectedRate,
        elementId: book.asin,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Comment posted:", data);
        setShowAddComment(false);
        setComment("");
      })
      .catch((error) => {
        console.error("Error posting comment:", error);
      });
  };

  const selectedClass = selected ? "selected" : "";

  return (
    <Card className={selectedClass} onClick={handleSelect}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.category}</Card.Text>
        <Card.Text>${book.price}</Card.Text>
        <Button className="bg-black btnOk">Nel carrello </Button>
        {selected && (
          <Button
            className="bg-black mt-2 w-100"
            onClick={handleAddCommentClick}
          >
            Aggiungi commento
          </Button>
        )}
        {showAddComment && (
          <div>
            <textarea
              className="w-100 bg-black text-light mt-2"
              placeholder="Inserisci il tuo commento qui"
              value={comment}
              onChange={handleCommentChange}
            />
            <Form.Select
              className="bg-black text-light"
              aria-label="Default select example"
              value={selectedRate}
              onChange={handleRateChange}
            >
              <option>Open this select menu</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
            <Button
              className="bg-black w-100 mt-1"
              onClick={handleSubmitComment}
            >
              Aggiungi
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default AllTheBooks;
