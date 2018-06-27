import React from "react";

class EstimatePg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <table>
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
        </table>
      </React.Fragment>
    );
  }
}

export default EstimatePg;
