import React from "react";

class LeftContentComponent extends React.Component {
  render() {
    return (
      <div className="left_panel">
        <button className="button_options" onClick={() => this.props.note("New")}> New Notes</button>
        <button className="button_options" onClick={() => this.props.note("View")}> View Notes </button>
        <button className="button_options" onClick={() => this.props.note("Copy")}> Copy rights</button>
      </div>
    );
  }
}
export default LeftContentComponent;