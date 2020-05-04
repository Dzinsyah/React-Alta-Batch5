import React from "react";
import { Redirect } from "react-router-dom";
import Navigation from "../component/Navigation";
import { connect } from "react-redux";

const Profile = (props) => {
  // set condition when status login == null, redirect to signin and show profile when is login is not null
  if (!props.dataUser.is_login) {
    return (
      <Redirect
        to={{
          pathname: "/signin",
          state: { message: "gagal login ya.." },
        }}
      />
    );
  } else {
    return (
      <React.Fragment>
        <Navigation {...props} />
        <section className="content">
          <h1
            style={{
              textalign: "center",
            }}
          >
            Profile
          </h1>
          <p>
            <label>Email:</label> {props.dataUser.email}
          </p>
          <p>
            <label>Full Name:</label> {props.dataUser.full_name}
          </p>
        </section>
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
  };
};

export default connect(mapStateToProps)(Profile);
