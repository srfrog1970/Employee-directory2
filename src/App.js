import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header/header";
import Container from "./component/Container/container";
import SearchBar from "./component/SearchBar/searchbar";
// import TableSort from "./component/TableSort/tableSort";
import Table from "./component/Table/table";

function App() {
  return (
    <div>
      <Container>
        <Header />
        <SearchBar />
        {/* <TableSort /> */}
        <Table />
      </Container>
    </div>
    // return <div className="App">Hello World</div>;
  );
}

export default App;
