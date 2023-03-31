import Carousel from "react-bootstrap/Carousel";
import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class UncontrolledExample extends Component {
  state = {
    saga: [],
  };

  getAllReservation = async (Endpoint) => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=d6d7d317&s=${Endpoint}`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({
          saga: data.Search,
        });
      } else {
        console.log("errore nella chiamata :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getAllReservation(this.props.myEndpoint);
  }

  render() {
    return (
      <Container>
        <Carousel nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />} prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />} indicators={false}>
          {this.state.saga.map((Search, index) => {
            if (index % 6 === 0) {
              return (
                <Carousel.Item>
            <Row className="d-flex flex-nowrap overflow-hidden">
              {this.state.saga.map((data) => (
                <Col
                  xs={6}
                  md={4}
                  lg={2}
                  key={data.imdbID}
                  className="p-0 d-flex justify-content-center"
                >
                  <img
                    className="d-block w-100 m-2"
                    src={data.Poster}
                    alt={data.Title}
                  />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
              );
            } else {
              return null;
            }
          })}
        </Carousel>
      </Container>
    );
  }
}

export default UncontrolledExample;









