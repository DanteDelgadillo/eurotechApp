import React from "react";
// import FormPanel from "../components/FormPanel";
import { Grid, Row, Col } from "react-bootstrap";
import * as CustomerCarFormService from "../services/CustomerCarForm.service";

class CustomerCarForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {}
    };
    this.onUpdate = this.onUpdate.bind(this);
    // this.onDelete = this.onDelete.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(props) {
    CustomerCarFormService.readById(this.props.customerId)
      .then(data => {
        this.setState({
          formData: data.item
        });

        console.log("Success!");
        console.log("x", this.state.formData);
      })
      .catch(error => {
        console.log("Failure:", error);
      });
  }

  onUpdate(e) {
    const customerInfo = {
      _id: this.state.formData._id,
      lastName: this.state.formData.lastName,
      firstName: this.state.formData.firstName,
      email: this.state.formData.email,
      phoneNumber: this.state.formData.phoneNumber,
      cellNumber: this.state.formData.cellNumber,
      busNumber: this.state.formData.busNumber,
      unit: this.state.formData.unit,
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
    };
    CustomerCarFormService.put(customerInfo)
      .then(response => {
        console.log("Update  success");
        window.location.href = "/Sales";
      })
      .catch(() => {
        console.log("Update  error");
      });
  }
  onDelete = event => {
    CustomerCarFormService.deleteInfo(this.state.formData._id)
      .then(() => {
        console.log("ok!");
        window.location.href = "/Sales";
      })
      .catch(err => {
        console.log("Delete failed: ", err);
      });
  };

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
                    <section>
                      <label>Last Name:</label>
                      <input
                        className="form-control"
                        type="text"
                        name="lastName"
                        id="lName"
                        value={this.state.formData.lastName}
                        onChange={this.onChange}
                      />
                    </section>
                  </Col>
                  <section>
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
                  </section>
                </Row>
                <Row className="show-grid">
                  <Col xs={6} md={8}>
                    <section>
                      <label>Email:</label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        value={this.state.formData.email}
                        onChange={this.onChange}
                      />
                    </section>
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col xs={6} md={3}>
                    <section>
                      <label>Phone Number:</label>
                      <input
                        className="form-control"
                        type="number"
                        name="phoneNumber"
                        id="pNumber"
                        value={this.state.formData.phoneNumber}
                        onChange={this.onChange}
                      />
                    </section>
                  </Col>
                  <Col xs={6} md={3}>
                    <section>
                      <label>Cell Number:</label>
                      <input
                        className="form-control"
                        type="number"
                        name="cellNumber"
                        id="cNumber"
                        value={this.state.formData.cellNumber}
                        onChange={this.onChange}
                      />
                    </section>
                  </Col>
                  <Col xs={6} md={2}>
                    <section>
                      <label>Bus Number:</label>
                      <input
                        className="form-control"
                        type="number"
                        name="busNumber"
                        id="bNumber"
                        value={this.state.formData.busNumber}
                        onChange={this.onChange}
                      />
                    </section>
                  </Col>
                </Row>
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
                  </Col>
                </Row>
              </Grid>
              <br />
              <button
                type="button"
                className="btn btn-danger btn-md pull-right "
                onClick={this.onDelete}
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-primary btn-md pull-right "
                onClick={this.onUpdate}
              >
                Update
              </button>
            </fieldset>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default CustomerCarForm;
