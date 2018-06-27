import React, { Component } from "react";
import MainNav from "./components/MainNav";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

// routes
import SalesPg from "./components/SalesPg";
import EstimatePg from "./components/EstimatePg";
import SalesForm from "./components/SalesForm";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MainNav />
        <BrowserRouter>
          <div>
            <Route path="/Sales" component={SalesPg} />
            <Route path="/Estimate" component={EstimatePg} />
            <Route path="/NewSales" component={SalesForm} />
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
