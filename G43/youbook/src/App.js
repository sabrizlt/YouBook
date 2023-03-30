import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <BookList />
      <Home />
    </div>
  );
}

export default App;
