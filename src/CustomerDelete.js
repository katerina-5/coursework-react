import React, { Component } from 'react';
import './App.css';

class CustomerDelete extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      customer: {}
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/customers/:${this._id.value}/delete`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id: this._id.value
      })
    }).then(response => {
      alert(`Customer ${this._id.value} was deleted!`);

      //   alert(response);
      //   this.setState({ response });

      //   response.json().then(customer => {
      //     alert(customer);
      //     this.setState({ customer });
      //   });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Delete customer</h1>

        <form onSubmit={this.handleSubmit}>
          <label>Id </label>
          <input
            ref={ref => {
              this._id = ref;
            }}
            placeholder="Id"
            type="text"
            id="id"
            size="50"
          />
          <br />

          <button type="submit">Delete customer</button>
        </form>

        <br />

        <td>{this.customer}</td>
      </div>
    );
  }
}

export default CustomerDelete;
