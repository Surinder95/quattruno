import React, { Component } from "react";
import Book from "../Components/Book.js";


class UserBooksModal extends Component {

  // state = {
  //   user: "Larry",
  //   books: [],
  //   error: false
  // }

  // componentDidMount() {
  //   fetch("/books")
  //     .then(res => res.json())
  //     .then(books => this.setState({ books }, () => console.log(books)))
  //     .catch(error => {
  //       console.error(error);
  //       this.setState({
  //         error: true
  //       });
  //     });
  // }

  // renderUserBooks = () => {
  //   const { books } = this.state;
  //   var table = [];
  //   var booksPerRow = 4;

  //   for (var i = 0; i < books.length; i++) {
  //     table.push(
  //       <div className="card-deck" key={i} style={{ paddingBottom: "10px" }}>
  //         {books
  //           .filter(book => book && book.author ? book.author.username : null === this.user)
  //           .slice(i * booksPerRow, booksPerRow + i * booksPerRow)
  //           .map(book => (
  //             <Book
  //               //key={book._id}
  //               price={book.price}
  //               title={book.title}
  //               image={book.image}
  //               course={book.course}
  //               description={book.description}
  //               created={book.created}
  //               contactInfo={null}
  //             />
  //           ))}
  //       </div>
  //     );
  //   }
  //   return table;
  // };

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
                  {this.renderUserBooks()}
                  {/* <Book
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
                  /> */}
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
