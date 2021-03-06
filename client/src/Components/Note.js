import React, { Component } from "react";
import "../App.css";

class Note extends Component {

  constructor(props){
    super(props)
    this.state = {
      image: this.props.image,
      course: this.props.course,
      teacher: this.props.teacher,
      date: this.props.date,
      comments: this.props.comments,
      dateAdded: this.props.dateAdded,
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      file: URL.createObjectURL(e.target.files[0])
    })
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h6 className="card-subtitle mb-2">
            {this.props.course} : {this.props.teacher}
          </h6>
          <h6 className="card-subtitle mb-2 rightText"> {this.props.date} </h6>
          <p className="card-text commentFont">{this.props.comments}</p>
          <br/>
          <a className="lightbox" href="#note">
            <img
              className="card-img-top"
              src={require("../Images/math-notes.JPG")}
              alt="notes"
            />
          </a>
          <div className="lightbox-target" id="note">
            <img
              className="card-img-top"
              src={require("../Images/math-notes.JPG")}
              alt="notes"
            />
            <a className="lightbox-close" href="#">
            </a>
          </div>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated {this.props.dateAdded} </small>
        </div>
      </div>
    );
  }
}

export default Note;
