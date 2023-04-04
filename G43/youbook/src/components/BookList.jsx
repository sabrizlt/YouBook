import { useState } from "react";
import AllTheBooks from "./AllTheBooks";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import fantasy from "../data/books/fantasy.json";
import horror from "../data/books/horror.json";
import history from "../data/books/history.json";
import romance from "../data/books/romance.json";
import scifi from "../data/books/scifi.json";

const BookList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filterBookList = (book) => {
    if (book.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    } else if (book.category.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
    return false;
  };

  return (
    <Container>
      <Row className="justify-content-center mt-3 mb-5">
        <Col xs={12}>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
        {fantasy
          .concat(horror, history, romance, scifi)
          .filter(filterBookList)
          .map((book, books) => (
            <Col key={books} xs={8} md={4} lg={4} className="mb-5">
              <AllTheBooks book={book} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default BookList;
