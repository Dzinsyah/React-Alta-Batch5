import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Navigation from "../component/Navigation";
import { bindActionCreators } from "redux";
import { doLogin, changeInputUser } from "../redux/actions/actionUser";

class SignIn extends Component {
  postLogin = async () => {
    // const loginBefore = this.props.login;
    await this.props.doLogin();
    const is_login = this.props.login;
    if (is_login) {
      this.props.history.push("/profile");
    }
  };
  render() {
    console.warn("Cek own props", this.props);

    const message = this.props.location.state
      ? this.props.location.state.message
      : "tidak ada parameter";

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
                onChange={(e) => this.props.changeInput(e)}
              />
            </div>
            <div>
              <input
                type="password"
                name="kataKunci"
                placeholder="Password"
                onChange={(e) => this.props.changeInput(e)}
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
            <p style={{ color: "red" }}>{message}</p>
          </form>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    namaPengguna: state.user.namaPengguna,
    kataKunci: state.user.kataKunci,
    login: state.user.is_login,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeInput: (e) => dispatch({ type: "CHANGE_INPUT_USER", payload: e }),
//     doLogin: bindActionCreators(doLogin, dispatch),
//   };
// };

const mapDispatchToProps = {
  changeInput: (e) => changeInputUser(e),
  doLogin: doLogin,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
