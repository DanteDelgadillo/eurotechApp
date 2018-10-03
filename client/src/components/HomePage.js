import React from "react";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }
  render() {
    return (
      <React.Fragment>
        <img
          className="BackGround"
          src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e430215c2b381a2521238f25966702e3&auto=format&fit=crop&w=1350&q=80"
          alt="shop"
        />
      </React.Fragment>
    );
  }
}

export default HomePage;
