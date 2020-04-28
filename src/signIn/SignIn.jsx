import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Navigation from "../navigation/Navigation";

class SignIn extends Component {
  state = { namaPengguna: "", kataKunci: "" };

  // function to handle input user
  changeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // function to do login
  postLogin = () => {
    const { namaPengguna, kataKunci } = this.state;

    // set data for body request
    const data = {
      username: namaPengguna,
      password: kataKunci,
    };

    // request data from API
    axios
      .post("https://atareact.free.beeceptor.com/auth", data)
      .then((response) => {
        if (response.data.hasOwnProperty("api_key")) {
          localStorage.setItem("api_key", response.data.api_key);
          localStorage.setItem("is_login", true);
          localStorage.setItem("full_name", response.data.full_name);
          localStorage.setItem("email", response.data.email);
          this.props.history.push("/profile");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <Navigation {...this.props} />
        <section className="content signin">
          <form onSubmit={(e) => e.preventDefault()}>
            <h4>SignIn</h4>
            <div>
              <input
                type="text"
                name="namaPengguna"
                placeholder="Username"
                onChange={(e) => this.changeInput(e)}
              />
            </div>
            <div>
              <input
                type="password"
                name="kataKunci"
                placeholder="Password"
                onChange={(e) => this.changeInput(e)}
              />
            </div>
            <button
              style={{
                height: "30px",
                width: "50px",
                backgroundColor: "red",
                color: "white",
              }}
              onClick={() => this.postLogin()}
            >
              SignIn
            </button>
            <button
              style={{
                height: "30px",
                width: "50px",
                backgroundColor: "red",
                color: "white",
              }}
              type="reset"
            >
              Reset
            </button>
          </form>
        </section>
      </React.Fragment>
    );
  }
}

export default withRouter(SignIn);
