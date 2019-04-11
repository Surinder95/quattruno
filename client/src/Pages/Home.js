import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card.js";
import "../App.css";
//import ClassNumberModal from "../Components/Card.js";
//import { Modal, OverlayTrigger, Button } from "react-bootstrap";
//import { Popover, Tooltip } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="modal" id="classNumberModal" data-backdrop="false">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="text-center text-primary centerMe">
                  {" "}
                  Enter Class Numbers{" "}
                </h3>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Class 1"
                      />
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Class 2"
                      />
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Class 3"
                      />
                      <br />
                    </div>
                  </div>
                  <button className="btn btn-primary" type="submit">
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" id="container-scroll">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <br />
              <button
                className="personalbubble btn btn-primary"
                data-target="#classNumberModal"
                data-toggle="modal"
              >
                Update Classes
              </button>
              <br />
              <br />
              <button
                className="personalbubble btn btn-primary"
                data-target="#"
                data-toggle="modal"
              >
                My Books
              </button>
              <br />
              <br />
              <button
                className="personalbubble btn btn-primary"
                data-target="#"
                data-toggle="modal"
              >
                My Notes
              </button>
              {/*
              <Card title="Surinder Singh" height="7rem" />
              <br />
              <br />
              <Card title="Planner" height="7rem" />
              <br />
              <br />
              <Card title="Classes" height="7rem" />
              <br />
              <br />
              <Card title="Log Out" height="7rem" />
              */}
            </div>
            <div className="col-sm-6 col-lg-3">
              <Link to="/Books" className="noTextDecoration">
                <Card
                  title="Books"
                  message="Buy and Sell Books"
                  height="20rem"
                />
              </Link>
            </div>

            <div className="col-sm-12 col-lg-3">
              <Link to="/Notes" className="noTextDecoration">
                <Card title="Notes" message="Share Notes" height="20rem" />
              </Link>
            </div>

            <div className="col-sm-12 col-lg-3">
              <Link to="/RideSharing" className="noTextDecoration">
                <Card
                  title="Ridesharing"
                  message="Ride Together"
                  height="20rem"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
