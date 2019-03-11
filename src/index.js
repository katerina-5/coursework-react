import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import HomeAbout from './HomeAbout';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<HomeAbout />, document.getElementById('root'));

// const name = 'John';
// const element = <h1>Hello, {name}</h1>;
// ReactDOM.render(element, document.getElementById('root'));

// const buttonCustomer = (
//   <button formAction="./customerInterface.js">Customer Interface</button>
// );
// ReactDOM.render(buttonCustomer, document.getElementById('root'));

// const buttonManager = (
//   <button formAction="./managerInterface.js">Manager Interface</button>
// );
// ReactDOM.render(buttonManager, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
