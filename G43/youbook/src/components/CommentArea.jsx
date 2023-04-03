import React, { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", { 
        headers: { 
          "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzYTExNWM1NmIzNjAwMTMzZmU1NWYiLCJpYXQiOjE2ODA1MzMwNTksImV4cCI6MTY4MTc0MjY1OX0.Idm_V78wfacjBZIGhuM2W9afSbr3UYJ6xSsknp_hHvY"  
        } 
      });
      const data = await response.json();
      this.setState({ comments: data });
      console.log(data); // stampa i commenti in console
    } catch (error) {
      console.log(error);
    }
  };

  fetchComments = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", { 
        headers: { 
          "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzYTExNWM1NmIzNjAwMTMzZmU1NWYiLCJpYXQiOjE2ODA1MzMwNTksImV4cCI6MTY4MTc0MjY1OX0.Idm_V78wfacjBZIGhuM2W9afSbr3UYJ6xSsknp_hHvY"  
        } 
      });
      const data = await response.json();
      this.setState({ comments: data });
      console.log(data); // stampa i commenti in console
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <CommentsList comments={this.state.comments} />
        <AddComment bookId={this.props.asin} fetchComments={this.fetchComments} />
      </div>
    );
  }
}

export default CommentArea;
