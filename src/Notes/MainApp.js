import React from "react";
import LeftContentComponent from "./LeftContentComponent";
import RightContentComponent from "./RightContentComponent";

class MainApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {linkName: 'New'};
      }
    note = (name) => {
        this.setState({
            linkName: name
          });
    }
   
    render() {
      return (
          <div>
              <LeftContentComponent  note={this.note}/>
              <RightContentComponent  showPage={this.state.linkName}/>
          </div>   
      );
    }
}


export default MainApp;