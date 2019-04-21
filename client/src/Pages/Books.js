import React, { Component } from "react";
import "../App.css";
import Card from "../Components/Card.js";
import Book from "../Components/Book.js";

class Books extends Component {

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     file: null

  //   }
  //   this.handleChange = this.handleChange.bind(this)
  // }

  constructor(){
    super();
    this.state={
        books:[]
    }
  }

  componentDidMount() {
    fetch('/books')
      .then(res => res.json())
      .then(books => this.setState({books}, () => console.log(books)));
  }


  // handleChange(e) {
  //   this.setState({
  //     file: URL.createObjectURL(e.target.files[0])
  //   })
  // }

  

  render() {
    return (

      <div>
        <div className="container-fluid" id="container-scroll">
          <div className="col-lg-12">
            <Card
              title="Books"
              //upload={<button style={{float:"right", margin:"10px"}} className="btn btn-primary" data-target="#uploadModal" data-toggle="modal"> Upload </button>}
              height="55rem"
              body={
                <div className="card-deck">

                  {this.state.books.map(({ id, title, description, course, price }) => (
                    <Book
                      price= {price}
                      title= {title}
                      course= {course}
                      description= {description}
                      contactInfo= {null}
                    />
                  ))}

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


/* render() {
  const { books } = this.props.book;
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
                    <input type="text" name="title" className="form-control" placeholder="Title"/><br/>
                    <input type="text" name="price" className="form-control" placeholder="Price"/><br/>
                    <input type="text" name="course" className="form-control" placeholder="Course"/><br/>
                    <input type="text" name="description" className="form-control" placeholder="Description"/><br/>
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

                {books.map(({ id, title, description, course, price }) => (
                  <Book
                    price= {price}
                    title= {title}
                    course= {course}
                    description= {description}
                    contactInfo= {null}
                  />
                ))}

              </div>
            }
          />
        </div>
      </div>
    </div>
  );
} */