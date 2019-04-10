import React, { Component } from 'react';
import './App.css';
import './AddNew.css';

class CustomerAdd extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      //   id: '5c2255ce45ffe514806f4a38',
      customer: {}
    };
  }

  //   handleNameChange(e) {
  //     this.setState({ name: e.target.value });
  //   }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/customers/', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        surname: this.surname.value,
        name: this.name.value,
        father_name: this.father_name.value,
        phone: this.phone.value,
        email: this.email.value
      })
    }).then(response => {
      response.json().then(customer => {
        // alert(customer._id);
        this.setState({ customer });
      });
    });
  }

  //   handleOutput() {
  //     fetch(`/customers/:${this.state.customer._id}`)
  //       .then(res => {
  //         console.log(res);
  //         return res.json();
  //       })
  //       .then(customer => {
  //         console.log(customer);
  //         this.setState({ customer });
  //       });
  //   }

  //   componentDidMount() {
  //     fetch('/customers/:id')
  //       .then(res => {
  //         console.log(res);
  //         return res.json();
  //       })
  //       .then(customer => {
  //         console.log(customer);
  //         this.setState({ customer });
  //       });
  //   }

  render() {
    return (
      <div className="App">
        <h1>Add new customer</h1>

        <form onSubmit={this.handleSubmit}>
          <label>Name </label>
          <input
            ref={ref => {
              this.name = ref;
            }}
            placeholder="Name"
            type="text"
            id="name"
            size="50"
          />
          <br />
          <label>Surname </label>
          <input
            ref={ref => {
              this.surname = ref;
            }}
            placeholder="Surname"
            type="text"
            name="surname"
            size="50"
          />
          <br />
          <label>Father name </label>
          <input
            ref={ref => {
              this.father_name = ref;
            }}
            placeholder="Father name"
            type="text"
            name="father_name"
            size="50"
          />
          <br />
          <label>Phone </label>
          <input
            ref={ref => {
              this.phone = ref;
            }}
            placeholder="Phone"
            type="text"
            name="phone"
            size="50"
          />
          <br />
          <label>Email </label>
          <input
            ref={ref => {
              this.email = ref;
            }}
            placeholder="Email"
            type="text"
            name="email"
            size="50"
          />
          <br />

          <button type="submit">Add new customer</button>
        </form>

        <br />

        {/* <button onClick={this.handleOutput}>View customer</button> */}

        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Father name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
          <tr>
            <td>{this.state.customer._id}</td>
            <td>{this.state.customer.name}</td>
            <td>{this.state.customer.surname}</td>
            <td>{this.state.customer.father_name}</td>
            <td>{this.state.customer.phone}</td>
            <td>{this.state.customer.email}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default CustomerAdd;
