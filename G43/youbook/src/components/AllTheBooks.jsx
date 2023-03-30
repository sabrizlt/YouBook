import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./AllTheBooks.css"; // importa il tuo file CSS

class AllTheBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  handleSelect = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    const selectedClass = this.state.selected ? "selected" : "";
    return (
      <Card className={selectedClass} onClick={this.handleSelect}>
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>{this.props.book.category}</Card.Text>
          <Card.Text>${this.props.book.price}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default AllTheBooks;
