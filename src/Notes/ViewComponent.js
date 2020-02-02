import React from "react";

class ViewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewingNotes: []
    }
  }
  componentDidMount() {
    fetch("http://localhost:3001/viewnotes")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ viewingNotes: result });
        },
        (error) => {
          console.log(error);
        }
      )
  }
  deleteViewingNote = (noteId) => {
    this.props.deleteNoteId(noteId);
    const modifiedNotes = this.state.viewingNotes.filter(item => item.noteId !== noteId);
    this.setState({ viewingNotes: modifiedNotes });
    console.log("After filtering" + JSON.stringify(modifiedNotes));
}
  render() {
    return (
      <div className="view_panel">
        <ul className="fishes">
          {this.state.viewingNotes && this.state.viewingNotes.length > 0 ? (
            this.state.viewingNotes.map((item, i) => {
              return (
                <div>
                  <p key={i}> name:  {item.name}  <br /> description: {item.desc} <br /> </p>
                  <button onClick={() => this.props.editNoteId(item.noteId)}>Edit</button>
                  <button onClick={() => this.deleteViewingNote(item.noteId)}> Delete</button>
                </div>)
            }
            )) : (
              <h4> No data</h4>
            )}
        </ul>
        <br />
      </div>
    );
  }
}
export default ViewComponent;