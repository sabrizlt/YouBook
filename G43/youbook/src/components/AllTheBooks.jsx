import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./AllTheBooks.css"; // importa il tuo file CSS

class AllTheBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      showAddComment: false,
      comment: "",
    };
  }

  

  handleSelect = () => {
    this.setState({ selected: !this.state.selected });
  };

  handleAddCommentClick = () => {
    this.setState({ showAddComment: true });
  };

  handleCommentChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmitComment = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzYTExNWM1NmIzNjAwMTMzZmU1NWYiLCJpYXQiOjE2ODA1MzQ4NzYsImV4cCI6MTY4MTc0NDQ3Nn0.4OqNYZs4v3Tln8FqZUFTkF6UicJelPkzLeapmZjw_2k",
      },
      body: JSON.stringify({
        comment: this.state.comment,
        rate: 1, // hardcoded rate to 1 for simplicity
        elementId: this.props.book.asin,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Comment posted:", data);
        this.setState({ showAddComment: false, comment: "" });
      })
      .catch((error) => {
        console.error("Error posting comment:", error);
      });
  };

  render() {
    const selectedClass = this.state.selected ? "selected" : "";
    const showAddComment = this.state.showAddComment;
    return (
      <Card className={selectedClass} onClick={this.handleSelect}>
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>{this.props.book.category}</Card.Text>
          <Card.Text>${this.props.book.price}</Card.Text>
          <Button className="bg-black btnOk">Nel carrello </Button>
          {this.state.selected && (
            <Button
              className="bg-black mt-2 w-100"
              onClick={this.handleAddCommentClick}
            >
              Aggiungi commento
            </Button>
          )}
          {showAddComment && (
            <div>
              <textarea
                className="w-100 bg-black text-light mt-2"
                placeholder="Inserisci il tuo commento qui"
                value={this.state.comment}
                onChange={this.handleCommentChange}
              />
              <Form.Select className="bg-black text-light" aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="3">4</option>
                <option value="3">5</option>
              </Form.Select>
              <Button
                className="bg-black w-100 mt-1"
                onClick={this.handleSubmitComment}
              >
                Aggiungi
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default AllTheBooks;
