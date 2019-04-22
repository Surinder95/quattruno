import React, { Component } from "react";
import Book from "../Components/Book.js";

class UserBooksModal extends Component {
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
                <div className="card-deck">
                  <Book
                    price="100"
                    title="Intro to Operating Systems"
                    course="COMP 322"
                    description="Hard-Cover book, bought brand-new and used for a semester. Email if interested only"
                    contactInfo="someonesPrivate@email.com"
                  />
                  <Book
                    price="79"
                    title="Data Mining"
                    course="COMP 484"
                    description="Selling as a SET 'Psychological Assessment with the MMPI-2' Alan F. Friedman, Richard Lewak, David S. Nicols, James T. Webb 'Essentials of the PAI Assessment' Leslie C. ..."
                    contactInfo="someoneElse@email.com"
                  />
                </div>
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
