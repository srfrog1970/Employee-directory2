import React, { Component } from "react";
import "./table.css";
import API from "../../utils/API";

class Table extends Component {
  state = { users: [] };

  componentDidMount() {
    console.log("API HEre");
    API.getRandomUser()
      .then((randomusers) => this.setState({ users: randomusers.data.results }))
      .catch((err) => console.log(err));
  }

  render() {
    // {
    //   this.state.users.length ? this.state.users[1].name : "loading";
    // }
    // console.log(this.state.users);
    console.log("HERE!");
    return (
      <div>
        Table.js New words And here we go again!
        {/* <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((user) => (
            <tr>
              <td>{user.image}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.dob}</td>
            </tr>
          ))}
        </tbody> */}
      </div>
    );
  }
}

export default Table;
