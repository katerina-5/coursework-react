import React, { Component } from 'react';
import './App.css';

class RealEstateObject extends Component {
  constructor() {
    super();
    this.state = { realestateobjects: [] };
  }

  componentDidMount() {
    fetch('/realestateobjects/all')
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(realestateobjects => {
        console.log(realestateobjects);
        this.setState({ realestateobjects });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Real Estate Objects</h1>

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

          {this.state.realestateobjects.map(realestateobject => (
            <tr key={realestateobject.id}>
              <td>{realestateobject._id}</td>
              <td>{realestateobject.name}</td>
              <td>{realestateobject.surname}</td>
              <td>{realestateobject.father_name}</td>
              <td>{realestateobject.phone}</td>
              <td>{realestateobject.email}</td>
              <td>{realestateobject.post}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default RealEstateObject;
