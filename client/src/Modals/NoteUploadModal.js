import React, { Component } from "react";
import ReactDOM from "react-dom";
import { post } from "axios";
import { uploadNote } from "../Components/UserFunctions";

const CLOUDINARY_UPLOAD_PRESET = 'omdurhcc';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/csun-hub/image/upload';


class NoteUploadModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: require("../Images/imagePlaceHolder.jpg"),
      course: "",
      teacher: "",
      description: "",
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
      teacher: this.state.teacher,
      description: this.state.description
    };
    console.log(note);

    uploadNote(note, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("uploaded");
      }
    });
  }

  processFile = async e => {
    var file = e.target.files[0];
    var formData = new FormData();

    formData.append("file", file);
    formData.append("cloud_name", "csun-hub");
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    let res = await fetch(CLOUDINARY_UPLOAD_URL,
      {
        method: "post",
        mode: "cors",
        body: formData
      });

    let json = await res.json();
    this.setState({ image: json.secure_url });
    console.log(JSON.stringify(json.secure_url));

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
                <form onSubmit={this.onSubmit}>
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        id="course"
                        name="course"
                        className="form-control"
                        placeholder="Course"
                        value={this.state.course}
                        onChange={this.onChange}
                      />
                      <br />
                      <input
                        type="text"
                        id="teacher"
                        name="teacher"
                        className="form-control"
                        placeholder="Professor"
                        value={this.state.teacher}
                        onChange={this.onChange}
                      />
                      <br />
                      <input
                        type="text"
                        id="description"
                        name="description"
                        className="form-control"
                        placeholder="Comments/Description"
                        value={this.state.description}
                        onChange={this.onChange}
                      />
                      <br />
                      <input
                        type="text"
                        id="date"
                        name="date"
                        className="form-control"
                        placeholder="Date"
                        value={this.state.date}
                        onChange={this.onChange}
                      />
                      <br />
                      <input
                        className="btn"
                        type="file"
                        onChange={this.processFile}
                      //file={this.state.file}
                      //value={this.state.fileName}
                      />
                      <br />
                      <img
                        style={{ width: 320, height: 320 }}
                        src={this.state.image}
                        resizemode="contain"
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
