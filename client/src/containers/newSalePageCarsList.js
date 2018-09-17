import React from "react";
class NewSalePageCarsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    };
    // this.save= this.save.bind(this);
    console.log("sfs", this.state.props);
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <tbody>
            <tr>
              <th>LP</th>
              <th>Make</th>
              <th>Model</th>
              <th>Vin</th>
            </tr>
            <tr>
              <td />
              <td />
              <td />
              <td />
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default NewSalePageCarsList;
