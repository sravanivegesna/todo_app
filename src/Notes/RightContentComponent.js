import React from "react";
import NewComponent from "./NewComponent";
import ViewComponent from "./ViewComponent";
import CopyRightsComponent from "./CopyRightsComponent";

class RightContentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editFlag: false,
      editNote: {},
      isViewPage: '',
      noteKey: ''
    }
  }
  saveNotes = (name, desc, editValueKey) => {
    console.log("I got key here" + editValueKey + name + desc)
    if (editValueKey !== '') {
      //notes[editValueKey] = note 
      fetch('http://localhost:3001/editnote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "noteid": editValueKey,
          "name": name,
          "desc": desc
        })
      }).then((response) => {
        console.log("Edit note method in right content " + JSON.stringify(response));
        this.setState({ isViewPage: 'View', editFlag: false })
        return response.json();
      });

    } else {
      console.log("here in the save note ")
      fetch('http://localhost:3001/saveNote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "noteId": `note${Date.now()}`,
          "name": name,
          "desc": desc
        })
      }).then((response) => {
        console.log("Save note method in right content " + JSON.stringify(response));
        this.setState({ isViewPage: 'New', editFlag: false, noteKey: '' })
        return response.json();
      });

    }
  }
  editNote = (key) => {
    //let note = '';
    fetch('http://localhost:3001/getnotebyid', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "noteid": key
      })
    }).then((response) => {
      console.log("update note method in right content " + JSON.stringify(response));
      let notepromise = response.json()
      notepromise.then((note) => {
        console.log("hereeee in note" + note)
        this.setState({ editFlag: true, editNote: note, noteKey: key, isViewPage: "Edit" });

      })
    });
  }
  deleteNote = (key) => {
    console.log("here in delteNote" + key)

    fetch('http://localhost:3001/deletebyid', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "noteid": key
      })
    }).then((response) => {
      console.log("here in the delete by id" + response.json())
      this.setState({ isViewPage: "View" })
      //this.setState({ editFlag: true, editNote: note, noteKey: key, isViewPage: "Edit" });
    });

  }
  render() {
    let button = '';
    if (this.props.showPage === "New" || this.state.isViewPage === "Edit") {
      button = <NewComponent saveData={this.saveNotes} editFlag={this.state.editFlag} selectedNote={this.state.editNote} editKey={this.state.noteKey} />;
    } else if (this.props.showPage === "View" || this.state.isViewPage === "View") {
      button = <ViewComponent editNoteId={this.editNote} deleteNoteId={this.deleteNote} test={this.state.isViewPage} />;
    } else if (this.props.showPage === "Copy") {
      button = <CopyRightsComponent />
    }
    return (
      <div className="right_panel">
        {button}
      </div>
    );
  }
}
export default RightContentComponent;