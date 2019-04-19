import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Book from './Components/Book';
import Books from "./Pages/Books";
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          {/* <Navbar /> */}
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/Books" component={Books} />
          {/* <Route path="/Notes" component={Notes} />
          <Route path="/RideSharing" component={RideSharing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </div> */}
        </div>
      </Router>
    );
  }
}

export default App;