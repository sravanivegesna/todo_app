import React from "react";

class FormNoteComponent extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.editFlag === true) {
      this.state = { name: this.props.selectedNote['name'], description: this.props.selectedNote['desc'] }
    }
    else {
      this.state = { name: '', description: '' }
    }
  }
  handleChange = (event) => {
    let stateProp = event.target.name;
    this.setState({ [stateProp]: event.target.value })
  }
  createNote = (event) => {

    event.preventDefault();
    this.props.saveForm(this.state.name, this.state.description, this.props.editKey);
    //refresh the form
    console.log("editKey in form " + this.props.editKey)
    event.currentTarget.reset()
    this.setState({ name: '', description: '' })
  }
  render() {
    return (
      <div className="new_panel">
        <h4> New Note {this.props.editKey}</h4>
        <form className="main_form" onSubmit={this.createNote}>
          <label>
            Name:
              <input type="text" value={this.state.name} className="text_chanage" onChange={this.handleChange} name="name" />
          </label><br/><br/>
          <label>
            Description:
              <textarea rows="10" cols="51" className="custom_texbox" value={this.state.description} onChange={this.handleChange} type="text" name="description" />
          </label><br/><br/>
          <input className="button_options" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default FormNoteComponent;