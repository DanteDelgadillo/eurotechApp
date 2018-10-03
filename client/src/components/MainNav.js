import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/HomePage">Repair Guys</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/Sales">
              Sales
            </NavItem>
            <NavItem eventKey={2} href="/Estimate">
              Estimates
            </NavItem>
            <NavDropdown eventKey={3} title="New Sale" id="basic-nav-dropdown">
              <MenuItem href="/AddNewCustomerPg" eventKey={3.1}>
                New Customer
              </MenuItem>
              <MenuItem href="/NewSalePage" eventKey={3.2}>
                Sales
              </MenuItem>
              <MenuItem eventKey={3.3}>Estimate</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default MainNav;
