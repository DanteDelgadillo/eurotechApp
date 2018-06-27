import React from "react";
import SalesList from "../containers/salesList";

class SalesPg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <SalesList />
      </React.Fragment>
    );
  }
}

export default SalesPg;
