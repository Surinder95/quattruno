import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class CustomNavbar extends Component {
  render() {
    return (
      <div>
        <div className="modal" id="signInModal" data-backdrop="false">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="text-center text-primary centerMe"> Sign Up </h3>
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
                        placeholder="CSUN Email"
                      />
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Password"
                      />
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Confirm Password"
                      />
                      <br />
                    </div>
                  </div>
                  <button type="submit">Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="modal" id="logInModal" data-backdrop="false">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="text-center text-primary centerMe"> Log In </h3>
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
                        placeholder="CSUN Email"
                      />
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Password"
                      />
                      <br />
                    </div>
                  </div>
                  <button type="submit">Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark Color-main">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" className="noTextDecoration">
                <h1 style={{ color: "#FFFFFF", fontSize: 30 }}>CSUN Hub</h1>
              </Link>
            </div>
            <div className="spacer" />
            <div>
              <button
                style={{ color: "red", margin: "10px" }}
                data-target="#signInModal"
                data-toggle="modal"
              >
                {" "}
                Sign Up{" "}
              </button>
              <button
                style={{ color: "red", margin: "10px" }}
                data-target="#logInModal"
                data-toggle="modal"
              >
                {" "}
                Log In{" "}
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default CustomNavbar;
