import React, { Component } from "react";
import "../App.css";

class Card extends Component {
  state = {
    title: this.props.title,
    message: this.props.message,
    body: this.props.body,
    height: this.props.height,
    footer: this.props.footer,
    upload: this.props.upload
  };

  render() {
    return (
      <div
        className="card personalbubble"
        style={{ height: "flex", minHeight: "20rem", borderRadius: "5px" }}
      >
        <div className="card-body" style={{ paddingTop: "2rem" }}>
          <h5
            className="card-title Color-main-text"
            style={{ fontSize: "2rem" }}
          >
            {this.props.title}
            {this.props.upload}
          </h5>
          <p
            className="card-text Color-main-text"
            style={{ paddingTop: "1rem" }}
          >
            {this.props.message}
          </p>
          <div> {this.props.body}</div>
          <div>{this.props.footer} </div>
        </div>
      </div>
    );
  }
}

export default Card;