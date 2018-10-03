import React from "react";
import * as AllCustomerInfoService from "../services/AllCustomerInfo.service";

class NewSalePageCarsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    };
    // this.save= this.save.bind(this);
    console.log("sfs", this.state.props);
  }
  componentwillMount(props) {
    AllCustomerInfoService.readById(this.props.customerId)
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
