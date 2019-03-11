import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Customer from './Customer';
import Manager from './Manager';
// import RealEstateObject from './RealEstateObject';
import CustomerAdd from './CustomerAdd';
import CustomerModify from './CustomerModify';
import CustomerDelete from './CustomerDelete';
import CustomerDetail from './CustomerDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Real Estate Agency</h1>
          <Router>
            <div>
              {/* <select>
                <option>Customer</option>
                <option>
                  <OldSchoolMenuLink
                    className="link"
                    activeOnlyWhenExact={true}
                    to="/customers"
                    label="Customer"
                  />
                </option>
              </select> */}
              <OldSchoolMenuLink
                className="link"
                activeOnlyWhenExact={true}
                to="/"
                label="Home Page"
              />
              <OldSchoolMenuLink
                className="link"
                to="/manager"
                label="All managers"
              />
              <OldSchoolMenuLink
                className="link"
                to="/customer"
                label="All customers"
              />
              {/* <OldSchoolMenuLink
                className="link"
                to="/realestateobject"
                label="All real estate objects"
              /> */}
              <OldSchoolMenuLink
                className="link"
                to="/new_customer"
                label="Add new customer"
              />
              <OldSchoolMenuLink
                className="link"
                to="/edit_customer"
                label="Edit customer"
              />
              <OldSchoolMenuLink
                className="link"
                to="/delete_customer"
                label="Delete customer"
              />
              <OldSchoolMenuLink
                className="link"
                to="/customer_detail"
                label="Detail of customer"
              />
              <hr />
              <Route path="/manager" component={Manager} />
              <Route path="/customer" component={Customer} />
              {/* <Route path="/realestateobject" component={RealEstateObject} /> */}
              <Route path="/new_customer" component={CustomerAdd} />
              <Route path="/edit_customer" component={CustomerModify} />
              <Route path="/delete_customer" component={CustomerDelete} />
              <Route path="/customer_detail" component={CustomerDetail} />
            </div>
          </Router>
          {/* <Router history={Customer}>
            <Customer />
          </Router> */}

          {/* <Router path="/customerPage" component={Customer}>
            <Link to="/customerPage">Customer's Page</Link>
          </Router>

          <Router path="/managerPage" component={Manager}>
            <Link to="/managerPage">Manager's Page</Link>
          </Router> */}
        </header>
      </div>
    );
  }
}

export default App;

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <div className={match ? 'active' : ''}>
          {match ? '> ' : ''}
          <Link className="link" to={to}>
            {label}
          </Link>
        </div>
      )}
    />
  );
}
