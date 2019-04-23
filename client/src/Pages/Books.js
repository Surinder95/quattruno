import React, { Component } from "react";
import "../App.css";
import Card from "../Components/Card.js";
import Book from "../Components/Book.js";
import UploadModal from "../Modals/UploadModal.js";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      page: 1,
      error: false
    };
    this.updateBooks = this.updateBooks.bind(this);
  }

  componentDidMount() {
    fetch("/books")
      .then(res => res.json())
      .then(books => this.setState({ books }, () => console.log(books)))
      .catch(error => {
        console.error(error);
        this.setState({
          error: true
        });
      });
  }

  renderBooks = () => {
    const { books, page } = this.state;
    //console.log("DisplatAmt:" + this.state.displayAmt);
    //console.log(books);
    var table = [];
    var booksPerRow = 4;

    for (var i = 0; i < page; i++) {
      table.push(
        <div className="card-deck" key={i} style={{ paddingBottom: "10px" }}>
          {books
            //.filter(book => book < page)
            .slice(i * booksPerRow, booksPerRow + i * booksPerRow)
            .map(book => (
              <Book
                key={book._id}
                price={book.price}
                title={book.title}
                image={book.image}
                course={null}
                description={book.description}
                contactInfo={null}
              />
            ))}
        </div>
      );
    }
    return table;
  };

  updateBooks() {
    this.setState(prev => {
      return { page: prev.page + 1 };
    });
  }

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
              body={this.renderBooks()}
              footer={
                <button
                  style={{ margin: 20 }}
                  className="btn btn-primary"
                  onClick={() => this.updateBooks()}
                >
                  Load More
                </button>
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Books;
