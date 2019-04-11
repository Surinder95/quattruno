import React, { Component } from "react";
import "../App.css";
import Card from "../Components/Card.js";
import Book from "../Components/Book.js";
import UploadModal from "../Components/Modals/UploadModal.js";

class Books extends Component {
  render() {
    return (
      <div>
        <UploadModal />
        <div
          className="container-fluid"
          id="container-scroll"
          style={{ padding: "0px 80px " }}
        >
          <div className="col-lg-12">
            <Card
              title="Books"
              upload={
                <button
                  style={{ float: "right", margin: "10px" }}
                  className="btn btn-primary"
                  data-target="#uploadModal"
                  data-toggle="modal"
                >
                  Upload
                </button>
              }
              height="55rem"
              body={
                <div>
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
                    <Book
                      price="30"
                      title="Combinatorial Algorithms"
                      course="COMP 482"
                      description="First come first serve"
                      contactInfo="anotherSomeone@email.com"
                    />
                    <Book
                      price="30"
                      title="Combinatorial Algorithms"
                      course="COMP 482"
                      description="First come first serve"
                      contactInfo="anotherSomeone@email.com"
                    />
                  </div>
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

export default Books;
