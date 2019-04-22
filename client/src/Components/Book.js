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
    contactInfo: this.props.contactInfo
  };


  render() {
    return (
      <div className="card">
        <div className="imagecont">
          <img
            className="card-img-top"
            //src={require("../Images/book-picture-example2.jpg")}
            alt="Textbook"
          />
          {/* <div className="overlay">
            <div className="text">
              If interested contact {this.props.contactInfo}
            </div>
          </div> */}
        </div>
        <label className="price">${this.props.price}</label>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.course}</h6>
          <p className="card-text">{this.props.description}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
       
    );
  }
}

export default Book;