import React from "react";
import './App.css'

class String extends React.Component {
  render() {
    return (
      <div className="barright">
        {JSON.stringify(this.props.json)}
      </div>
    );
  }
}

class BarRight extends React.Component {
  render() {
    const size = this.props.selected
    return (
      <div className="barright">
        {/* Ternary to display details of selected transaction or simple message if none transaction selected*/}
      
      { size.length == 0 ? <ul>Click on one or several transactions to see details</ul>: this.props.selected.map(x => <String json={this.props.transaction[x - 1]} />) }
      </div>
    );
  }
}

export default BarRight;