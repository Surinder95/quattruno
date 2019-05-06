import React, { Component } from "react";
import "../App.css";

class Book extends Component {
  state = {
    image: this.props.image,
    price: this.props.price,
    title: this.props.title,
    course: this.props.course,
    description: this.props.description,
    height: this.props.height,
    contactInfo: this.props.contactInfo,
    created: this.props.created
  };

  render() {
    return (
      <div className="card">
        <div className="imagecont">
          <img className="card-img-top" src={this.props.image} alt="Textbook" />
        </div>

        <label className="price">${this.props.price}</label>

        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.course}</h6>
          <p className="card-text">{this.props.description}</p>
          <button className="btn btn-outline-primary">

            {/* <a className="removeBlueText" href={"mailto:" + user.email + "?Subject=Still%20Available"}>Message</a> 
              how do we get the user's email?
            */}

            <a className="removeBlueText" href="mailto:someone@example.com?Subject=Hello%20again">Message</a>
          </button>
        </div>

        <div className="card-footer">
          <small className="text-muted">
            Uploaded {this.date.toDateString()}
          </small>
        </div>

      </div>
    );
  }
}

export default Book;
