import React, { Component } from "react";
import "../App.css";
import Note from "../Components/Note.js";
import Card from "../Components/Card.js";
import NoteUploadModal from "../Modals/NoteUploadModal";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      page: 1,
      error: false
    };
    this.updateNotes = this.updateNotes.bind(this);
  }

  componentDidMount() {
    fetch("/notes")
      .then(res => res.json())
      .then(notes => this.setState({ notes }, () => console.log(notes)))
      .catch(error => {
        console.error(error);
        this.setState({
          error: true
        });
      });
  }

  renderNotes = () => {
    const { notes, page } = this.state;
    var table = [];
    var notesPerRow = 4;

    for (var i = 0; i < page; i++) {
      table.push(
        <div className="card-deck" key={i} style={{ paddingBottom: "10px" }}>
          {notes
            .slice(i * notesPerRow, notesPerRow + i * notesPerRow)
            .map(note => (
              <Note
                key={note._id}
                title={note.title}
                course={notes.course}
                image={note.image}
                teacher={note.teacher}
                description={note.description}
                created={note.createed}
              />
            ))}
        </div>
      );
    }
    return table;
  };

  updateNotes() {
    this.setState(prev => {
      return { page: prev.page + 1 };
    });
  }

  render() {
    return (
      <div>
        <NoteUploadModal />
        <div className="container-fluid" id="container-scroll">
          <div className="col-lg-12">
            <Card
              title="Notes"
              height="55rem"
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
              body={this.renderNotes()}
              footer={
                <div>
                  <button style={{ margin: 20 }} className="btn btn-primary">
                    Load More
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

export default Notes;
