import React, { Component } from "react";
import "../App.css";
import Card from "../Components/Card.js";
import Book from "../Components/Book.js";

class Books extends Component {

  constructor(props){
    super(props)
    this.state = {
      file: null

    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      file: URL.createObjectURL(e.target.files[0])
    })
  }

  appendToUserBookListings() {
    var bookListings = [];
    
  }

  render() {
    return (
      <div>
      <div className="modal" id="uploadModal" data-backdrop="false">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="text-center text-primary centerMe"> Upload Book </h3>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col">
                    <input type="text" id="title" className="form-control" placeholder="Title"/><br/>
                    <input type="text" id="price" className="form-control" placeholder="Price"/><br/>
                    <input type="text" id="course" className="form-control" placeholder="Course"/><br/>
                    <input type="text" id="description" className="form-control" placeholder="Description"/><br/>
                    <input type="file" onChange={this.handleChange}/>
                    <img style={{ width:250, height:250 }} src={this.state.file} resizeMode='contain'/><br/>
                  </div>
                </div>
                <button className="btn btn-primary" onClick={() => {} } type="submit">Upload</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="container-scroll">
        <div className="col-lg-12">
          <Card
            title="Books"
            upload={<button style={{float:"right", margin:"10px"}} className="btn btn-primary" data-target="#uploadModal" data-toggle="modal"> Upload </button>}
            height="55rem"
            body={
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
                  price="55"
                  title="Discrete Structures"
                  course="COMP 252"
                  description="Have many other books for sale"
                  contactInfo="yes@email.com"
                />
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
