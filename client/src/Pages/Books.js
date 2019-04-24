import React, { Component } from "react";
import "../App.css";
import Card from "../Components/Card.js";
import Book from "../Components/Book.js";
import UploadModal from "../Modals/UploadModal.js";

class Books extends Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      page: 1,
      error: false
    };
    this.updateBooks = this.updateBooks.bind(this);
=======

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
>>>>>>> parent of 48c74fcc... temp
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
<<<<<<< HEAD
<<<<<<< HEAD
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


// import React, { Component } from "react";
// import "../App.css";
// import Card from "../Components/Card.js";
// import Book from "../Components/Book.js";

// class Books extends Component {

//   // constructor(props){
//   //   super(props)
//   //   this.state = {
//   //     file: null

//   //   }
//   //   this.handleChange = this.handleChange.bind(this)
//   // }

//   constructor(props){
//     super();
//     this.state={
//         books:[]

//     }
//   }

//   componentDidMount() {
//     fetch('/books')
//       .then(res => res.json())
//       .then(books => this.setState({books}, () => console.log(books)));
//   }


//   // handleChange(e) {
//   //   this.setState({
//   //     file: URL.createObjectURL(e.target.files[0])
//   //   })
//   // }

  

//   render() {
//     return (
//       <div>



//       <div>
//       <form>
//                 <div className="row">
//                   <div className="col">
//                     <input type="text" name="title" className="form-control" placeholder="Title"/><br/>
//                     <input type="text" name="price" className="form-control" placeholder="Price"/><br/>
//                     <input type="text" name="course" className="form-control" placeholder="Course"/><br/>
//                     <input type="text" name="description" className="form-control" placeholder="Description"/><br/>
//                     <input type="file" onChange={this.handleChange}/>
//                     <img style={{ width:250, height:250 }} src={this.state.file} resizeMode='contain'/><br/>
//                   </div>
//                 </div>
//                 <button className="btn btn-primary" onClick={() => {} } type="submit">Upload</button>
//               </form>
//       </div>

//       <div>
//           <h2>Books</h2>
//           <ul>
//               {this.state.books.map(book => 
//               <li key={book.id}>{book.title} {book.description}</li>
//               )}
//         </ul>
//       </div>




//       </div>
      


=======

=======

>>>>>>> parent of 48c74fcc... temp
      <div>
            <h2>Books</h2>
            <ul>
                {this.state.books.map(book => 
                <li key={book.id}>{book.title} {book.description}</li>
                )}
        </ul>
        </div>
<<<<<<< HEAD
>>>>>>> parent of 48c74fcc... temp
=======
>>>>>>> parent of 48c74fcc... temp




<<<<<<< HEAD
//       // <div>
//       // <div className="modal" id="uploadModal" data-backdrop="false">
//       //   <div className="modal-dialog">
//       //     <div className="modal-content">
//       //       <div className="modal-header">
//       //         <h3 className="text-center text-primary centerMe"> Upload Book </h3>
//       //         <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
//       //       </div>
            
//       //     </div>
//       //   </div>
//       // </div>
//       // <div className="container-fluid" id="container-scroll">
//       //   <div className="col-lg-12">
//       //     <Card
//       //       title="Books"
//       //       upload={<button style={{float:"right", margin:"10px"}} className="btn btn-primary" data-target="#uploadModal" data-toggle="modal"> Upload </button>}
//       //       height="55rem"
//       //       body={
//       //         <div className="card-deck">
//       //           <Book
//       //             price="100"
//       //             title="Intro to Operating Systems"
//       //             course="COMP 322"
//       //             description="Hard-Cover book, bought brand-new and used for a semester. Email if interested only"
//       //             contactInfo="someonesPrivate@email.com"
//       //           />
//       //           <Book
//       //             price="79"
//       //             title="Data Mining"
//       //             course="COMP 484"
//       //             description="Selling as a SET 'Psychological Assessment with the MMPI-2' Alan F. Friedman, Richard Lewak, David S. Nicols, James T. Webb 'Essentials of the PAI Assessment' Leslie C. ..."
//       //             contactInfo="someoneElse@email.com"
//       //           />
//       //           <Book
//       //             price="30"
//       //             title="Combinatorial Algorithms"
//       //             course="COMP 482"
//       //             description="First come first serve"
//       //             contactInfo="anotherSomeone@email.com"
//       //           />
//       //           <Book
//       //             price="55"
//       //             title="Discrete Structures"
//       //             course="COMP 252"
//       //             description="Have many other books for sale"
//       //             contactInfo="yes@email.com"
//       //           />
//       //         </div>
//       //       }
//       //     />
//       //   </div>
//       // </div>
//       // </div>
//     );
//   }
// }

// export default Books;
=======
      // <div>
      // <div className="modal" id="uploadModal" data-backdrop="false">
      //   <div className="modal-dialog">
      //     <div className="modal-content">
      //       <div className="modal-header">
      //         <h3 className="text-center text-primary centerMe"> Upload Book </h3>
      //         <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      //       </div>
      //       <div className="modal-body">
      //         <form>
      //           <div className="row">
      //             <div className="col">
      //               <input type="text" id="title" className="form-control" placeholder="Title"/><br/>
      //               <input type="text" id="price" className="form-control" placeholder="Price"/><br/>
      //               <input type="text" id="course" className="form-control" placeholder="Course"/><br/>
      //               <input type="text" id="description" className="form-control" placeholder="Description"/><br/>
      //               <input type="file" onChange={this.handleChange}/>
      //               <img style={{ width:250, height:250 }} src={this.state.file} resizeMode='contain'/><br/>
      //             </div>
      //           </div>
      //           <button className="btn btn-primary" onClick={() => {} } type="submit">Upload</button>
      //         </form>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      // <div className="container-fluid" id="container-scroll">
      //   <div className="col-lg-12">
      //     <Card
      //       title="Books"
      //       upload={<button style={{float:"right", margin:"10px"}} className="btn btn-primary" data-target="#uploadModal" data-toggle="modal"> Upload </button>}
      //       height="55rem"
      //       body={
      //         <div className="card-deck">
      //           <Book
      //             price="100"
      //             title="Intro to Operating Systems"
      //             course="COMP 322"
      //             description="Hard-Cover book, bought brand-new and used for a semester. Email if interested only"
      //             contactInfo="someonesPrivate@email.com"
      //           />
      //           <Book
      //             price="79"
      //             title="Data Mining"
      //             course="COMP 484"
      //             description="Selling as a SET 'Psychological Assessment with the MMPI-2' Alan F. Friedman, Richard Lewak, David S. Nicols, James T. Webb 'Essentials of the PAI Assessment' Leslie C. ..."
      //             contactInfo="someoneElse@email.com"
      //           />
      //           <Book
      //             price="30"
      //             title="Combinatorial Algorithms"
      //             course="COMP 482"
      //             description="First come first serve"
      //             contactInfo="anotherSomeone@email.com"
      //           />
      //           <Book
      //             price="55"
      //             title="Discrete Structures"
      //             course="COMP 252"
      //             description="Have many other books for sale"
      //             contactInfo="yes@email.com"
      //           />
      //         </div>
      //       }
      //     />
      //   </div>
      // </div>
      // </div>
    );
  }
}

export default Books;
>>>>>>> parent of 48c74fcc... temp
