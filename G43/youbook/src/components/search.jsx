import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(e) {
    setSearchTerm(e.target.value);
    props.onSearch(e.target.value);
  }

  return (
    <Form>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearch}
        />
      </Form.Group>
    </Form>
  );
}

export default SearchBar;
