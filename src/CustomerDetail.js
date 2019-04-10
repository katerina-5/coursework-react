import React, { Component } from 'react';
import './App.css';

class CustomerDetail extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      customer: [{}]
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/customers/:${this._id.value}`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify({
      //   _id: this._id.value
      // })
    }).then(response => {
      if (response.status === 500) {
        alert('500 Internal server error!');
        // alert(response.statusText);
      }
      alert(this._id.value);
      response.json().then(customer => {
        this.setState({ customer });
        alert(customer._id + '\n' + customer.name + ' ' + customer.surname);
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Customer detail</h1>

        <form onSubmit={this.handleSubmit}>
          <label>Id </label>
          <input
            ref={ref => {
              this._id = ref;
            }}
            placeholder="Id"
            type="text"
            id="_id"
            size="50"
          />
          <br />

          <button type="submit">Detail of customer</button>
        </form>

        <br />

        <table>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
          <tr>
            <label>Id: </label>
            <td>{this.state.customer._id}</td>
          </tr>
          <tr>
            <label>Surname: </label>
            <td>{this.state.customer.surname}</td>
          </tr>
          <tr>
            <label>Name: </label>
            <td>{this.state.customer.name}</td>
          </tr>
          <tr>
            <label>Father name: </label>
            <td>{this.state.customer.father_name}</td>
          </tr>
          <tr>
            <label>Phone: </label>
            <td>{this.state.customer.phone}</td>
          </tr>
          <tr>
            <label>Email: </label>
            <td>{this.state.customer.email}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default CustomerDetail;
