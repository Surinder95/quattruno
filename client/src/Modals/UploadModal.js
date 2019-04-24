import React, { Component } from "react";
import { post } from 'axios';
import { upload } from '../Components/UserFunctions'

class UploadModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      title: '',
      price: '',
      description: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const book = {
      image: this.state.image,
      title: this.state.title,
      price: this.state.price,
      description: this.state.description
    }
    console.log(book)

    upload(book, function(err){
      if(err){
        console.log(err)
      }else{
        console.log("uploaded");
      }
    })
  
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
                <form onSubmit={this.onSubmit}>
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        id="title"
                        name="title"
                        className="form-control"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.onChange}
                      />
                      <br />
                      <input
                        type="text"
                        id="price"
                        name="price"
                        className="form-control"
                        placeholder="Price"
                        value={this.state.price}
                        onChange={this.onChange}
                      />
                      <br />
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
                        id="description"
                        name="description"
                        value={this.state.description}
                        onChange={this.onChange}
                        className="form-control"
                        placeholder="Description"
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
                        //alt="book"
                      />
                    </div>
                  </div>
                  <br />
                  <button className="btn btn-primary" type="submit" data-dismiss="modal">
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
