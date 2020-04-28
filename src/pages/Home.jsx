import React from "react";
import Navigation from "../component/Navigation";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation {...this.props} />
        <section className="content">
          <h1 style={{ textalign: "center" }}>This Is Home</h1>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
