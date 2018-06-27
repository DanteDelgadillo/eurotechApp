import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div className="landing-image" style={{ marginBottom: "50px" }}>
            <div className="topnav">
              <div id="overlay" />
              <nav className="navbar">
                <ul>
                  <li>
                    {" "}
                    <a href="/Sales">Sales</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/Estimate">Estimate</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/NewSales">New Sales</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#Customers">Customers</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#OfficeReports">Office Reports</a>
                  </li>
                  <li style={{ float: "right" }}>
                    <a href="#logout">Logout</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div />
      </React.Fragment>
    );
  }
}
export default MainNav;
