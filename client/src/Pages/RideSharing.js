import React, { Component } from "react";
import "../App.css";
import Card from "../Components/Card.js";

class Ridesharing extends Component {
  render() {
    return (
      <div className="container-fluid" id="container-scroll">
          <div className="col-lg-12">
            <Card title="Ridesharing" height="55rem"/>
          </div>
      </div>
    );
  }
}

export default Ridesharing;
