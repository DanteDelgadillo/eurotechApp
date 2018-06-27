import React from "react";
import CustomerCarForm from "../containers/customerCarForm";

class SalesFormPg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <CustomerCarForm />
      </React.Fragment>
    );
  }
}
export default SalesFormPg;
