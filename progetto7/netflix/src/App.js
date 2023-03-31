import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from './components/Carosello';
import Navbar from './components/Navbar';
import Footer from './components/Footer';




  function App() {
    const potter = "harry%20potter"
    const marvel = "marvel"
    const starWars = "star%20wars"
  return (
    <div className="App">
      <Navbar />
     <Carousel myEndpoint={potter}/>
      <Carousel myEndpoint={marvel}/>
      <Carousel myEndpoint={starWars}/>
      <Footer />
    </div>
  );
}

export default App;
