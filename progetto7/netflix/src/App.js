import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./components/Carosello";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Select from "./components/Select";
import CarouselNew from "./components/Carousel";
import Jumbotron from "./components/Jumbotron";

function App() {
  const potter = "harry%20potter";
  const marvel = "marvel";
  const starWars = "star%20wars";
  return (
    <div className="App">
      
      <Navbar />
      <Jumbotron className="mt-3"/>
      <div className="d-flex">
      <h1 className="text-start mx-4 mt-3 text-light">Home</h1>
      <Select />
      </div>
      <CarouselNew className="mx-4 mt-3 mb-3 text-light"/>

      <h2 className="text-start mx-4 mt-4 text-light">Harry Potter Saga</h2>
      <Carousel myEndpoint={potter} />
      <h2 className="text-start mx-4 mt-5 text-light">Marvel</h2>
      <Carousel myEndpoint={marvel} />
      <h2 className="text-start mx-4 mt-5 text-light">Star Wars Saga</h2>
      <Carousel myEndpoint={starWars} />
      <Footer />
    </div>
  );
}

export default App;
