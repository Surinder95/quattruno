import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }

  render() {
    const loginRegLink = (
      <ul className="nav navbar-form navbar-right">
        <div className="row">
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              <h1 style={{ color: "#FFFFFF", fontSize: 20 }}>Log In</h1>
            </Link>
          </li>
          {"                "}
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              <h1 style={{ color: "#FFFFFF", fontSize: 20 }}>Register</h1>
            </Link>
          </li>
        </div>
      </ul>
    );

    const userLink = (
      <ul className="nav navbar-form navbar-right">
        <div className="row">
          <li className="nav-item">
            <Link to="/profile" className="nav-link">
              User
            </Link>
          </li>
          <li className="nav-item">
            <a href="" onClick={this.logOut.bind(this)} className="nav-link">
              Logout
            </a>
          </li>
        </div>
      </ul>
    );

    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary"
        style={{ padding: "0px 10px" , marginBottom: 10}}
      >
        <div className="container-fluid" id="navbar1">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <h1
                  style={{
                    color: "#FFFFFF",
                    fontSize: 35,
                    fontWeight: 430,
                    paddingLeft: 40
                  }}
                >
                  CSUN Hub
                </h1>
              </Link>
            </li>
          </ul>

          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
