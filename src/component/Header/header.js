import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./header.css";

function Header() {
  return (
    <Jumbotron className="headerStyle">
      <h1>Employee Directory</h1>
      <p>
        Click on carrots to filter by heading or use the search box to narrow
        your results.
      </p>
    </Jumbotron>
  );
}

export default Header;
