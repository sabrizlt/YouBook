import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-light py-3 mt-3">
      <Row>
        <Col className="text-center">
          <p>&copy; 2023 MyWebsite.com</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
