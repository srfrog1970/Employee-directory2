import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Container from "../Container/container";
import Row from "react-bootstrap/Row";
import "./searchbar.css";

function SearchBar() {
  return (
    <Container>
      <Row className="searchBarRow">
        <InputGroup className="searchField">
          <FormControl placeholder="Search" />
        </InputGroup>
      </Row>
    </Container>
  );
}

export default SearchBar;
