import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile";

import Home from "./Pages/Home";
import Books from "./Pages/Books";
import Notes from "./Pages/Notes";
import RideSharing from "./Pages/RideSharing";

class App extends Component {
  render() {
    return (
      <Router>
        <div
          className="App Color-background"
          style={{ minHeight: "100vh", height: "100%" }}
        >
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/Books" component={Books} />
          <Route path="/Notes" component={Notes} />
          <Route path="/RideSharing" component={RideSharing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
