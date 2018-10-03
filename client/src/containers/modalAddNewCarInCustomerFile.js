import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

class ModalAddNewCarInCustomerFile extends React.Component {
  constructor(props) {
    super(props);
    const initializedFormData = this.initializeForm(this.props.formData);
    this.state = {
      formData: initializedFormData
    };
  }

  initializeForm = customerInfo => ({
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

  render() {
    return (
      <React.Fragment>
        <div>
          <form>
            <fieldset>
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
                  </Col>
                </Row>
              </Grid>
              <br />
              <button
                type="button"
                className="btn btn-primary btn-md pull-right "
                onClick={this.onUpdate}
              >
                Save
              </button>
            </fieldset>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default ModalAddNewCarInCustomerFile;
