import React, { Component } from 'react';
import axios from 'axios'
import Transaction from './transaction'
import Header from './Header'
import Menu from './Menu';
import './App.css'

const endpoint = "http://private-3f9656-paymiuminterviews.apiary-mock.com/transactions"

class App extends Component {
  state = {transaction: []};
  componentDidMount() {
    axios.get("http://private-3f9656-paymiuminterviews.apiary-mock.com/transactions")
     .then((res) => {
        this.setState({transaction: res.data[0].transactions})
      })
  }
  render() {
    return (
      <div> 
      <Header />
      <Menu />
      {
        this.state.transaction.map(i => <Transaction info={i} />)

      }
        </div>
    );
  }
}

export default App;
