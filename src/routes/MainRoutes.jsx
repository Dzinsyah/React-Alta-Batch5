import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../redux";

import Home from "../pages/Home";
import News from "../pages/News";
import NotMatch from "../pages/NotMatch";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/news" component={News} />
          <Route path="/news-category/:category" component={News} />
          <Route component={NotMatch} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
