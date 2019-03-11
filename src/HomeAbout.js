import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import
import Customer from './Customer';
import Manager from './Manager';

function CustomLinkExample() {
  return (
    <Router>
      <div>
        <OldSchoolMenuLink
          activeOnlyWhenExact={true}
          to="/"
          label="Home Page"
        />
        <OldSchoolMenuLink to="/customer" label="Customer's Page" />
        <OldSchoolMenuLink to="/manager" label="Manager's Page" />
        <hr />
        {/* <Route exact path="/" component={App} /> */}
        <Route path="/customer" component={Customer} />
        <Route path="/manager" component={Manager} />
        {/* <Route path="/realestateobject" component={RealEstateObject} />
        <Route path="/" component={Manager} /> */}
      </div>
    </Router>
  );
}

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <div className={match ? 'active' : ''}>
          {match ? '> ' : ''}
          <Link to={to}>{label}</Link>
        </div>
      )}
    />
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default CustomLinkExample;
