import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../data/books/horror.json";

function YouBook() {
  return (
    <Container>
      <Row className="justify-content-center mt-3 mb-5">
        {img.map((book, index) => (
          <Col key={index} xs={8} md={4} lg={4} className="mb-5">
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Card.Text>{book.price}</Card.Text>
                <Button variant="dark">Shop</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default YouBook;
