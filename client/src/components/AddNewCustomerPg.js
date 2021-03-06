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
    email: "",
    unit: "",
    vin: "",
    year: "",
    make: "",
    model: "",
    miles: "",
    lp: "",
    color: "",
    prodDate: "",
    engineSize: "",
    trans: ""
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
      email: this.state.formData.email,
      cars: [
        {
          vin: this.state.formData.vin,
          year: this.state.formData.year,
          make: this.state.formData.make,
          model: this.state.formData.model,
          miles: this.state.formData.miles,
          lp: this.state.formData.lp,
          color: this.state.formData.color,
          prodDate: this.state.formData.prodDate,
          engineSize: this.state.formData.engineSize,
          trans: this.state.formData.trans
        }
      ]
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
                      type="number"
                      name="zip"
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
                <Row />
              </Grid>
              <Grid>
                <h3> Vehicle Info: </h3>
                <Row className="show-grid">
                  <Col xs={6} md={2}>
                    <section>
                      <label>Unit #:</label>
                      <input
                        className="form-control"
                        type="number"
                        name="unit"
                        id="unit"
                        value={this.state.formData.unit}
                        onChange={this.onChange}
                      />
                    </section>
                  </Col>
                  <Col xs={6} md={6}>
                    <section>
                      <label>VIN:</label>
                      <input
                        className="form-control"
                        type="text"
                        name="vin"
                        id="vinNumber"
                        value={this.state.formData.vin}
                        onChange={this.onChange}
                      />
                    </section>
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col xs={6} md={2}>
                    <section>
                      <label>Year:</label>
                      <input
                        className="form-control"
                        type="number"
                        name="year"
                        id="year"
                        value={this.state.formData.year}
                        onChange={this.onChange}
                      />
                    </section>
                  </Col>
                  <Col xs={6} md={4}>
                    <section>
                      <label>Make:</label>
                      <input
                        className="form-control"
                        type="text"
                        name="make"
                        id="make"
                        value={this.state.formData.make}
                        onChange={this.onChange}
                      />
                    </section>
                  </Col>
                  <Col xs={6} md={2}>
                    <section>
                      <label>Model:</label>
                      <input
                        className="form-control"
                        type="text"
                        name="model"
                        id="model"
                        value={this.state.formData.model}
                        onChange={this.onChange}
                      />
                    </section>
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col xs={6} md={2}>
                    <section>
                      <label>Miles:</label>
                      <input
                        className="form-control"
                        type="number"
                        name="miles"
                        id="miles"
                        value={this.state.formData.miles}
                        onChange={this.onChange}
                      />
                    </section>
                  </Col>
                  <Col xs={6} md={4}>
                    <section>
                      <label>LP:</label>
                      <input
                        className="form-control"
                        type="text"
                        name="lp"
                        id="lp"
                        value={this.state.formData.lp}
                        onChange={this.onChange}
                      />
                    </section>
                  </Col>
                  <Col xs={6} md={2}>
                    <section>
                      <label>Color:</label>
                      <input
                        className="form-control"
                        type="text"
                        name="color"
                        id="color"
                        value={this.state.formData.color}
                        onChange={this.onChange}
                      />
                    </section>
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col xs={6} md={2}>
                    <section>
                      <label>Prod/Date:</label>
                      <input
                        className="form-control"
                        type="text"
                        name="prodDate"
                        id="prodDate"
                        value={this.state.formData.prodDate}
                        onChange={this.onChange}
                      />
                    </section>
                  </Col>
                  <Col xs={6} md={4}>
                    <section>
                      <label>Engine Size:</label>
                      <input
                        className="form-control"
                        type="text"
                        name="engineSize"
                        id="eSize"
                        value={this.state.formData.engineSize}
                        onChange={this.onChange}
                      />
                    </section>
                  </Col>
                  <Col xs={6} md={2}>
                    <section>
                      <label>Trans:</label>
                      <input
                        className="form-control"
                        type="text"
                        name="trans"
                        id="transmission"
                        value={this.state.formData.trans}
                        onChange={this.onChange}
                      />
                    </section>
                    <br />
                    <button
                      type="button"
                      className="btn btn-primary btn-md pull-right "
                      onClick={this.onSave}
                    >
                      Save Customer
                    </button>
                  </Col>
                </Row>
              </Grid>
            </fieldset>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default AddNewCustomerPg;
