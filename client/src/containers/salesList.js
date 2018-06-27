import React from "react";
import * as CustomerCarFormService from "../services/CustomerCarForm.service";
import ModalCustomerCarForm from "../containers/modalCustomerCarForm";
import { Modal } from "react-bootstrap";

class SalesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItems: [],
      customerId: "",
      show: false
    };

    this.passId = this.passId.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleHide() {
    this.setState({ show: false });
  }

  passId() {}

  componentDidMount() {
    CustomerCarFormService.getAll()
      .then(response => {
        this.setState({
          activeItems: response.items
        });
      })
      .catch(() => {
        console.log("ReadAll articles error");
      });
  }
  render() {
    return (
      <React.Fragment>
        <table>
          <tbody>
            <tr>
              <th>N.O</th>
              <th>Writer</th>
              <th>Name</th>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>LP</th>
              <th>Unit</th>
              <th>Open</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
            {this.state.activeItems.map(item => {
              return (
                <tr
                  key={item._id}
                  onClick={() => {
                    this.setState({
                      customerId: item._id,
                      show: true
                    });
                  }}
                >
                  <td>N.O</td>
                  <td>Writer</td>
                  <td>{item.lastName + " " + item.firstName}</td>
                  <td>{item.make}</td>
                  <td>{item.model}</td>
                  <td>{item.year}</td>
                  <td>{item.lp}</td>
                  <td>{item.unit}</td>
                  <td>Open</td>
                  <td>Status</td>
                  <td>Total</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="modal-container">
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
            bsSize="lg"
          >
            {/* <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
                Contained Modal
              </Modal.Title> */}
            {/* </Modal.Header> */}
            <Modal.Body>
              <div>
                <ModalCustomerCarForm customerId={this.state.customerId} />
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
export default SalesList;
