import React from "react";
import * as AllCustomerInfoService from "../services/AllCustomerInfo.service";
// import NewSalePageCarsList from "../containers/newSalePageCarsList";

class NewSalesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItems: [],
      customerCars: ""
    };
  }

  componentDidMount() {
    AllCustomerInfoService.getAll()
      .then(response => {
        this.setState({
          activeItems: response.items
        });
        console.log("ReadAll articles good", this.state.activeItems);
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
              <th>Name</th>
              <th>Email</th>
              <th>Phone #</th>
              <th>Cell</th>
            </tr>
            {this.state.activeItems.map(item => {
              return (
                <tr
                  key={item._id}
                  onClick={() => {
                    this.setState({
                      customerCars: item.cars
                    });
                    console.log(item.cars);
                  }}
                >
                  <td>{item.lastName + " " + item.firstName}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.cellNumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <NewSalePageCarsList customerCars={this.state.customerCars} /> */}
        {/* <table>
          <tbody>
            <tr>
              <th>LP</th>
              <th>Make</th>
              <th>Model</th>
              <th>Vin</th>
            </tr>
          </tbody>
        </table> */}
      </React.Fragment>
    );
  }
}

export default NewSalesPage;
