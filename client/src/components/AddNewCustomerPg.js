import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import * as AllCustomerInfoService from "../services/AllCustomerInfo.service";

class AddNewCustomerPg extends React.Component {
  constructor(props) {
    super(props);
    const initializedFormData = this.initializeForm(this.props.formData);
    this.state = {
      formData: initializedFormData
    };
    this.onSave = this.onSave.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  initializeForm = customerInfo => ({
    lastName: "",
    firstName: "",
    phoneNumber: "",
    cellNumber: "",
    busNumber: "",
    address: "",
    zip: "",
    state: "",
    email: ""
  });

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
      const formData = {
        ...prevState.formData,
        [name]: value
      };
      return { formData };
    }, this.validateForm);
  };

  onSave(e) {
    const customerInfo = {
      lastName: this.state.formData.lastName,
      firstName: this.state.formData.firstName,
      phoneNumber: this.state.formData.phoneNumber,
      cellNumber: this.state.formData.cellNumber,
      busNumber: this.state.formData.busNumber,
      adreess: this.state.formData.address,
      zip: this.state.formData.zip,
      state: this.state.formData.state,
      email: this.state.formData.email
    };
    AllCustomerInfoService.post(customerInfo)
      .then(data => {
        console.log(data);
        customerInfo._id = data.item;
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <form>
            <fieldset>
              <Grid>
                <h3> Customer Info: </h3>
                <div className="hidden"> {this.state.formData._id}</div>
                <Row className="show-grid">
                  <Col xs={6} md={4}>
                    <label>Last Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="lastName"
                      id="lName"
                      value={this.state.formData.lastName}
                      onChange={this.onChange}
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <label>First Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="firstName"
                      id="fNAme"
                      value={this.state.formData.firstName}
                      onChange={this.onChange}
                    />
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col xs={6} md={3}>
                    <label>Phone Number:</label>
                    <input
                      className="form-control"
                      type="number"
                      name="phoneNumber"
                      id="pNumber"
                      value={this.state.formData.phoneNumber}
                      onChange={this.onChange}
                    />
                  </Col>
                  <Col xs={6} md={3}>
                    <label>Cell Number:</label>
                    <input
                      className="form-control"
                      type="number"
                      name="cellNumber"
                      id="cNumber"
                      value={this.state.formData.cellNumber}
                      onChange={this.onChange}
                    />
                  </Col>
                  <Col xs={6} md={2}>
                    <label>Bus Number:</label>
                    <input
                      className="form-control"
                      type="number"
                      name="busNumber"
                      id="bNumber"
                      value={this.state.formData.busNumber}
                      onChange={this.onChange}
                    />
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col xs={6} md={4}>
                    <label>Address:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="address"
                      id="address"
                      value={this.state.formData.address}
                      onChange={this.onChange}
                    />
                  </Col>
                  <Col xs={6} md={2}>
                    <label>Zip:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Zip"
                      id="Zip"
                      value={this.state.formData.zip}
                      onChange={this.onChange}
                    />
                  </Col>
                  <Col xs={6} md={2}>
                    <label>State:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="state"
                      id="state"
                      value={this.state.formData.state}
                      onChange={this.onChange}
                    />
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col xs={6} md={8}>
                    <label>Email:</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      id="email"
                      value={this.state.formData.email}
                      onChange={this.onChange}
                    />
                  </Col>
                </Row>
                <br />
                <button
                  type="button"
                  className="btn btn-primary btn-md  "
                  onClick={this.onSave}
                >
                  Save Customer
                </button>
                <Row />
              </Grid>
            </fieldset>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default AddNewCustomerPg;
