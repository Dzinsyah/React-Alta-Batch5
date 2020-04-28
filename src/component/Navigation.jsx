import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import Search from "./Search";

const logoWrapper = {
  display: "block",
  width: "100px",
  float: "left",
  textAlign: "center",
};

class Navigation extends React.Component {
  // function to change router by category news
  changeRouter = async (category) => {
    // condition when handleRouter undefined/not
    if (this.props.handleRouter) {
      this.props.handleRouter(category);
    } else {
      // redirect pages to endpoint news-category
      await this.props.history.replace("/news-category/" + category);
    }
  };

  // function to do logout
  postSignout = () => {
    localStorage.removeItem("is_login");
    this.props.history.push("/");
  };
  render() {
    return (
      <nav id="topnav">
        <div style={logoWrapper}>
          <img src={logo} className="App-logo" alt="logo" /> <b>ReactNews</b>
        </div>
        <ul id="topmenu">
          <li className="menu">
            <Link to="/">Home</Link>
          </li>
          <li className="menu">
            <Link to="/signup">SignUp</Link>
          </li>
          <li className="menu">
            <Link to="/signin">SignIn</Link>
          </li>
          <li className="menu">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="menu">
            <Link onClick={this.postSignout}>SignOut</Link>
          </li>
          <li className="menu">
            <Link
              to="/news"
              onClick={this.props.getNews ? () => this.props.getNews() : null}
            >
              News
            </Link>
          </li>
          <li
            className="menu"
            value="sport"
            onClick={() => this.changeRouter("sports")}
          >
            Olah Raga
          </li>
          <li
            className="menu"
            value="business"
            onClick={() => this.changeRouter("business")}
          >
            Bisnis
          </li>
          <Search {...this.props} />
        </ul>
      </nav>
    );
  }
}

export default Navigation;
