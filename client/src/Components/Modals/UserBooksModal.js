import React, { Component } from "react";

class UserBooksModal extends Component {
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

  appendToUserBookListings() {
    var bookListings = [];
  }

  render() {
    return (
      <div>
        <div className="modal" id="userBooksModal" data-backdrop="false">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="text-center text-primary centerMe">My Books</h3>
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
                <a href="#">Book 1</a> <a href="#">Book 2</a>{" "}
                <a href="#">Book 3</a> <a href="#">...</a>
              </div>
            </div>
          </div>
          <div id="modal-backdrop" className="modal-backdrop-transparent" />
        </div>
      </div>
    );
  }
}
export default UserBooksModal;
