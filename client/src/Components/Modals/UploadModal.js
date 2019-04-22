import React, { Component } from "react";

class UploadModal extends Component {
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
                  Upload Book
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
                        id="title"
                        className="form-control"
                        placeholder="Title"
                      />
                      <br />
                      <input
                        type="text"
                        id="price"
                        className="form-control"
                        placeholder="Price"
                      />
                      <br />
                      <input
                        type="text"
                        id="course"
                        className="form-control"
                        placeholder="Course"
                      />
                      <br />
                      <input
                        type="text"
                        id="description"
                        className="form-control"
                        placeholder="Description"
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
                        alt="book"
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
      </div>
    );
  }
}
export default UploadModal;
