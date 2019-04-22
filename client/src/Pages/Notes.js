import React, { Component } from "react";
import "../App.css";
import Note from "../Components/Note.js";
import Card from "../Components/Card.js";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      file: URL.createObjectURL(e.target.files[0])
    });
  }

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
                <form>
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        id="course"
                        className="form-control"
                        placeholder="Course"
                      />
                      <br />
                      <input
                        type="text"
                        id="teacher"
                        className="form-control"
                        placeholder="Professor"
                      />
                      <br />
                      <input
                        type="text"
                        id="comments"
                        className="form-control"
                        placeholder="Comments"
                      />
                      <br />
                      <input
                        type="text"
                        id="date"
                        className="form-control"
                        placeholder="Date"
                      />
                      <br />
                      <input
                        className="btn"
                        type="file"
                        onChange={this.handleChange}
                      />
                      <br />
                      <img
                        style={{ width: 320, height: 320 }}
                        src={this.state.file}
                        resizeMode="contain"
                        alt="note"
                      />
                    </div>
                  </div>
                  <br />
                  <button className="btn btn-primary" type="submit">
                    Upload
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div id="modal-backdrop" className="modal-backdrop-transparent" />
        </div>
        <div className="container-fluid" id="container-scroll">
          <div className="col-lg-12">
            <Card
              title="Notes"
              height="55rem"
              upload={
                <button
                  style={{ float: "right", margin: "10px" }}
                  className="btn btn-primary"
                  data-target="#uploadModal"
                  data-toggle="modal"
                >
                  {" "}
                  Upload{" "}
                </button>
              }
              body={
                <div className="card-deck">
                  <Note
                    course="COMP 222"
                    teacher="Lazik"
                    comments="Section 5.2"
                    dateAdded="11-17-18"
                  />
                  <Note
                    course="COMP 490"
                    teacher="Dousette"
                    comments="went over test questions"
                    dateAdded="12-4-18"
                  />
                  <Note
                    course="COMP 322"
                    teacher="Isayan"
                    comments="number 5 from the hw is on the test"
                    dateAdded="12-3-18"
                  />
                  <Note
                    course="COMP 482"
                    teacher="Noga"
                    comments="will post slides on Canvas"
                    dateAdded="12-5-18"
                  />
                </div>
              }
              footer={
                <div>
                  <button style={{ margin: 20 }} className="btn btn-primary">
                    {" "}
                    Load More{" "}
                  </button>
                </div>
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Notes;
