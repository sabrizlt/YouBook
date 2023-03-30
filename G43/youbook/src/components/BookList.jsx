import React, { useState } from "react";
import AllTheBooks from "./AllTheBooks";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import books from "../data/books/horror.json"; // importa l'intero file JSON

function BookList(props) {
  const [searchTerm, setSearchTerm] = useState("");

  function filterBookList(book) {
    if (book.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
    return false;
  }

  return (
    <Container>
      <Row className="justify-content-center mt-3 mb-5">
        <Col xs={12}>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Search by title"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
        {/* utilizza map per creare una lista di componenti per ogni elemento del JSON */}
        {books.filter(filterBookList).map((book, index) => (
          <Col key={index} xs={8} md={4} lg={4} className="mb-5">
            <AllTheBooks book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BookList;
