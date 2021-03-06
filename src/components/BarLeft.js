import React from "react";
import './App.css'

class BarLeft extends React.Component {
  state = {
    Transfers: 0,
    Invoices: 0
  }
  componentWillReceiveProps() {
    let t = 0;
    let i = 0;
    let tab = [];


    // Incrementation of each selected 'operation_type' with value 'transfer' or 'invoice'
    this.props.transaction.map(x => {
      if (x.operation_type == 'transfer')
        t++;
      if (x.operation_type != 'transfer')
        i++;
    });
    this.setState({Transfers: t, Invoices: i});

  }
  render() {
    return (
      <div className="barleft" align="middle" style={{'justify-content': 'flex-start'}}>
        <div className="logo"><h2>FINPAL</h2></div>
        <ul style={{color:"white", 'list-style-type': 'none'}}>
        <div className="category">
          <li>Overview</li>
          <li>Transactions({this.props.selected.length})</li>
          </div>
          <hr/>
          <li>Transfers({this.state.Transfers})</li>
          <li>Invoices({this.state.Invoices})</li>
          <hr/>
          <li>Manage cards</li>
          <li>Manage Accounts</li>
          <hr/>
          <li>Team</li>
          <li>Integrations</li>
          <li>Settings</li>
        </ul>
        <button>Upgrade Account</button>
      </div>
    );
  }
}

export default BarLeft;
