import React from "react";
import FormNoteComponent from "./FormNoteComponent";

class NewComponent extends React.Component {
    
    render() {
      return (
       <FormNoteComponent saveForm={this.props.saveData} editFlag={this.props.editFlag} selectedNote={this.props.selectedNote} editKey={this.props.editKey}/>
      );
    }
}
export default NewComponent;