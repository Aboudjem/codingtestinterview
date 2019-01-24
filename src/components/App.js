import React, { Component } from 'react';
import axios from 'axios'
import Header from './Header'
import './App.css';
import EnhancedTable from './SimpleTable';
import BarLeft from './BarLeft';
import BarRight from './BarRight';

const endpoint = "http://private-3f9656-paymiuminterviews.apiary-mock.com/transactions"

class App extends Component {

  state = {
    transaction: [],
            selected: []         
  }; // Using axios to get api's informations
  componentDidMount() {
    axios.get("http://private-3f9656-paymiuminterviews.apiary-mock.com/transactions")
     .then((res) => {
        this.setState({transaction: res.data[0].transactions}) // get informations from the api as a table
      })
  }
  callback = (tab) => {
    this.setState({selected: tab})
  }
  render() {
    return (
      <div> 
        {/* Header Component */}
        <Header />
        <div className="all">
        {/* Left Bar Components with updated information*/}
          <BarLeft selected={this.state.selected} transaction={this.state.transaction}/>
        {/* Main Components with all requested transactions*/}        
          <EnhancedTable data={this.state.transaction} callback={this.callback} className="table"/>
        {/* Right Bar Components with updated information*/}
        <BarRight selected={this.state.selected} transaction={this.state.transaction}/>
        </div>
</div>
    );
  }
}

export default App;
