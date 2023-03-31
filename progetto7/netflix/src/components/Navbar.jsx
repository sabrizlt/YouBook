import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
      <Navbar bg="black" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home" ><img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            width="100"
            className="d-inline-block align-top"
            alt="Netflix logo"
          /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tv show">Tv Shows</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#latest">Latest</Nav.Link>
            <Nav.Link href="#my list">My list</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
  );
}

export default ColorSchemesExample;