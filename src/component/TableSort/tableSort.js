import React, { Component } from "react";
import "./tableSort.css";
// import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import API from "../../utils/API";
import { BootstrapTable } from "react-bootstrap-table-next";

class TableSort extends Component {
  state = {
    results: [],
    options: {
      defaultSortName: "name", // default sort column name
      defaultSortOrder: "desc", // default sort order
    },
    columns: [
      {
        dataField: "image",
        text: "Image",
      },
      {
        dataField: "name",
        text: "Name",
        sort: true,
      },
      {
        dataField: "phone",
        text: "Phone",
      },
      {
        dataField: "email",
        text: "Email",
      },
      {
        dataField: "dob",
        text: "DOB",
      },
    ],
  };
  //
  componentDidMount() {
    // API.getRandomUser().then((res) => this.setState.results(res));
    this.setState({
      results: [
        {
          name: "Shawn",
          image: "",
          email: "shawn.hayes70@gmail.com",
          phone: "952-994-9013",
          dob: "05/05/1970",
        },
        {
          name: "Bob",
          image: "",
          email: "shawn.hayes70@gmail.com",
          phone: "952-994-9013",
          dob: "05/05/1970",
        },
      ],
    });
  }

  render() {
    console.log(this.state.results);
    return (
      <div>
        {/* <BootstrapTable data={this.state.result} options={this.state.options}>
          <TableHeaderColumn dataField="image" dataSort>
            Image
          </TableHeaderColumn>
          <TableHeaderColumn dataField="name" isKey dataSort>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField="phone">Phone</TableHeaderColumn>
        </BootstrapTable> */}
        {this.state.results.length ? this.state.results[1].name : "loading"}
        {/* <BootstrapTable
          bootstrap4
          keyField="name"
          data={this.state.results}
          columns={this.state.columns}
        /> */}
      </div>
    );
  }
}

export default TableSort;
