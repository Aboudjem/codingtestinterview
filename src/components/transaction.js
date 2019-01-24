import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Transaction extends Component {
  render() {
    return (
      <div>
        <Table responsive>
          <thead>
            <tr>  
              <th>{this.props.info.created_at}</th>
              <th>{this.props.info.counterparty_name}</th>
              <th>{this.props.info.operation_type}</th>
              <th>{this.props.info.amount}</th>
            </tr>
        </thead>
        </Table>
      </div>
    );
  }
}

export default Transaction;