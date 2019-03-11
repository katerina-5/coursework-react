import React, { Component } from 'react';
import './App.css';

class Customer extends Component {
  constructor() {
    super();
    this.state = { customers: [] };
  }

  componentDidMount() {
    fetch(`/customers/all`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.status === 500) {
        alert(response.statusText);
      }
      response.json().then(customers => {
        // alert(customers);
        this.setState({ customers });
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Customers</h1>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Father name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>

          {this.state.customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer._id}</td>
              <td>{customer.name}</td>
              <td>{customer.surname}</td>
              <td>{customer.father_name}</td>
              <td>{customer.phone}</td>
              <td>{customer.email}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Customer;
