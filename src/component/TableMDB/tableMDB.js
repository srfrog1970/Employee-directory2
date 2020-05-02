import React, { Component } from "react";
import "./tableMDB.css";
import API from "../../utils/API";
import { MDBDataTable } from "mdbreact";

var data = {
  columns: [
    {
      label: "Image",
      field: "image",
      sort: "asc",
      width: 150,
    },
    {
      label: "Name",
      field: "name",
      sort: "asc",
      width: 270,
    },
    {
      label: "Phone",
      field: "phone",
      sort: "asc",
      width: 200,
    },
    {
      label: "Email",
      field: "email",
      sort: "asc",
      width: 100,
    },
    {
      label: "DOB",
      field: "dob",
      sort: "asc",
      width: 150,
    },
  ],
  rows: [],
};

API.getRandomUser()
  .then((randomusers) => {
    randomusers.data.results.map((userdata) => {
      var dob = new Date(userdata.dob.date).toLocaleDateString("en-US");
      console.log(dob);
      data.rows.push({
        name: userdata.name.first,
        image: userdata.picture.thumbnail,
        email: userdata.email,
        phone: userdata.phone,
        dob: dob,
      });
    });
  })
  .catch((err) => console.log(err));

class TableMDB extends Component {
  render() {
    console.log("rendering");
    console.log(data.rows);
    console.log(data.columns);
    return (
      <div>
        <MDBDataTable data={data} />
      </div>
    );
  }
}

export default TableMDB;
