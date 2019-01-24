import React, { Component } from 'react';
import axios from 'axios'
import Transaction from './transaction'
import Header from './Header'
import Menu from './Menu';
import './App.css';
import EnhancedTable from './SimpleTable';
import BarLeft from './BarLeft';
import BarRight from './BarRight';


const endpoint = "http://private-3f9656-paymiuminterviews.apiary-mock.com/transactions"

class App extends Component {

  state = {
    transaction: [],
            selected: []         
  };
  componentDidMount() {
    axios.get("http://private-3f9656-paymiuminterviews.apiary-mock.com/transactions")
     .then((res) => {
        this.setState({transaction: res.data[0].transactions})
      })
  }
  callback = (tab) => {
    this.setState({selected: tab})
  }
  render() {
    return (
      <div> 
        <Header />
        <div className="all">
          <BarLeft selected={this.state.selected} transaction={this.state.transaction}/>
          <EnhancedTable data={this.state.transaction} callback={this.callback} className="table"/>
          <BarRight selected={this.state.selected} transaction={this.state.transaction}/>
        </div>
</div>
    );
  }
}

export default App;
