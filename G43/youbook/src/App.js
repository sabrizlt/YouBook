import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import CommentList from "./components/CommentsList";
import CommentArea from "./components/CommentArea";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <BookList />
      <CommentList />   
      <CommentArea /> 
      <Home />
    </div>
  );
}

export default App;
