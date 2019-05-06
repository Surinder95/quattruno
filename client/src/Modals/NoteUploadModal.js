import React, { Component } from "react";
import { post } from "axios";
import { upload } from "../Components/UserFunctions";

class NoteUploadModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      course: "",
      professor: "",
      description: "",
      date: "",
      file: null
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const note = {
      image: this.state.image,
      course: this.state.course,
      professor: this.state.professor,
      description: this.state.description
    };
    console.log(note);

    upload(note, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("uploaded");
      }
    });
  }

  /** 
  appendToUserBookListings() {
    var bookListings = [];
  }
  */

  render() {
    return (
      <div>
        <div className="modal" id="uploadModal" data-backdrop="false">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="text-center text-primary centerMe">
                  Upload Notes
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
                <form onSubmit={this.onSubmit}>
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        id="course"
                        className="form-control"
                        placeholder="Course"
                        value={this.state.course}
                        onChange={this.onChange}
                      />
                      <br />
                      <input
                        type="text"
                        id="teacher"
                        className="form-control"
                        placeholder="Professor"
                        value={this.state.professor}
                        onChange={this.onChange}
                      />
                      <br />
                      <input
                        type="text"
                        id="comments"
                        className="form-control"
                        placeholder="Comments"
                        value={this.state.description}
                        onChange={this.onChange}
                      />
                      <br />
                      <input
                        type="text"
                        id="date"
                        className="form-control"
                        placeholder="Date"
                        value={this.state.date}
                        onChange={this.onChange}
                      />
                      <br />
                      <input
                        className="btn"
                        type="file"
                        onChange={this.onChange}
                        file={this.state.file}
                        value={this.state.fileName}
                      />
                      <br />
                      <img
                        style={{ width: 320, height: 320 }}
                        src={this.state.file}
                        resizemode="contain"
                        //alt="note"
                      />
                    </div>
                  </div>
                  <br />
                  <button
                    className="btn btn-primary"
                    type="submit"
                    data-target="#uploadModal"
                    data-toggle="modal"
                  >
                    Upload
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div id="modal-backdrop" className="modal-backdrop-transparent" />
        </div>
      </div>
    );
  }
}
export default NoteUploadModal;
