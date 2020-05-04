import React from "react";
import Navigation from "../component/Navigation";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    console.warn("Cek props masuk", this.props);

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

const mapStateToProps = (state) => {
  return {
    haha: state,
  };
};
export default connect(mapStateToProps)(Home);
