import React from "react";
import { Redirect } from "react-router-dom";
import Navigation from "../component/Navigation";

const Profile = (props) => {
  // get data is_login, email and full_name from local storage
  const is_login = JSON.parse(localStorage.getItem("is_login"));
  const email = localStorage.getItem("email");
  const full_name = localStorage.getItem("full_name");

  // set condition when status login == null, redirect to signin and show profile when is login is not null
  if (is_login === null) {
    return <Redirect to={{ pathname: "/signin" }} />;
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
            <label>Email:</label> {email}
          </p>
          <p>
            <label>Full Name:</label> {full_name}
          </p>
        </section>
      </React.Fragment>
    );
  }
};

export default Profile;
