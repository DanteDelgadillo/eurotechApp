import React from "react";
import * as AllCustomerInfoService from "../services/AllCustomerInfo.service";
import { Modal } from "react-bootstrap";
import ModalAddNewCarInCustomerFile from "../containers/modalAddNewCarInCustomerFile";

class NewSalesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItems: [],
      customerCar: [],
      show: false
    };
    this.handleHide = this.handleHide.bind(this);
    // this.onAdd = this.onAdd.bind(this);
  }

  componentDidMount() {
    AllCustomerInfoService.getAll()
      .then(response => {
        this.setState({
          activeItems: response.items
        });
        console.log("ReadAll articles good", this.state.activeItems);
      })
      .catch(() => {
        console.log("ReadAll articles error");
      });
  }

  handleHide() {
    this.setState({ show: false });
  }

  render() {
    return (
      <React.Fragment>
        <table className="col col-sm-5">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone #</th>
              <th>Cell</th>
            </tr>
            {this.state.activeItems.map(item => {
              return (
                <tr
                  key={item._id}
                  onClick={() => {
                    this.setState({
                      customerCar: item.cars
                    });
                  }}
                >
                  <td>{item.lastName + " " + item.firstName}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.cellNumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <table className="col col-sm-5">
          <tbody>
            <tr>
              <th>LP</th>
              <th>Make</th>
              <th>Model</th>
              <th>Vin</th>
            </tr>
            <tr />
            {this.state.customerCar.map(item => {
              return (
                <tr
                  key={item._id}
                  // onClick={() => {
                  //   this.setState({
                  //     customerId: item._id,
                  //   });
                  // }}
                >
                  <td>{item.lp}</td>
                  <td>{item.year}</td>
                  <td>{item.model}</td>
                  <td>{item.vin}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          type="button"
          className="btn btn-primary btn-xs pull-right"
          onClick={() => {
            this.setState({
              show: true
            });
          }}
        >
          Add New Car
        </button>
        <div className="modal-container">
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
            bsSize="lg"
          >
            <Modal.Body>
              <div>
                <ModalAddNewCarInCustomerFile />
                <h1>h1</h1>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={this.handleHide}>Close</button>
            </Modal.Footer>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

export default NewSalesPage;
