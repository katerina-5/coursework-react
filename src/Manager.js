import React, { Component } from 'react';
import './App.css';

// const userType = 'Manager';

class Manager extends Component {
  constructor() {
    super();
    this.state = { managers: [] };
  }

  componentDidMount() {
    fetch('/managers/')
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(managers => {
        console.log(managers);
        this.setState({ managers });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Managers</h1>

        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Father name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Post</th>
          </tr>

          {this.state.managers.map(manager => (
            <tr key={manager.id}>
              <td>{manager._id}</td>
              <td>{manager.name}</td>
              <td>{manager.surname}</td>
              <td>{manager.father_name}</td>
              <td>{manager.phone}</td>
              <td>{manager.email}</td>
              <td>{manager.post}</td>
            </tr>
          ))}
        </table>

        {/* {this.state.managers.map(manager => (
          <h3 key={manager.id}>
            manager: {manager.name} {manager.surname}
          </h3>
        ))} */}
      </div>
    );
  }
}

export default Manager;
