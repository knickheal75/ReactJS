import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "./App.css";
import ths from "./ths.jpeg";

class App extends Component {
  render() {
    return (
      <div>
        <p className="invoicetext">
          {" "}
          <img className="img1" src={ths} />
          INVOICE
        </p>

        <hr />
        <div className="company">
          <div>The Hacking School, </div>
          <div>Trillion Co-working Space, </div>
          <div>Gachibowli, </div>
          <div>Hyderabad - 500008</div>
          email:hackingschool@gmail.com
          <div className="customer">
            <div>Date:</div>
            <div>Customer name:</div>
          </div>
        </div>
        <Table striped bordered hover size="sm" className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>40</td>
              <td>2</td>
              <td>200</td>
              <td>tt</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
