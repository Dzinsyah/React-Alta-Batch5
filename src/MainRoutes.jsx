import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./home/Home";
import News from "./news/News";
import NotMatch from "./notMatch/NotMatch";
import Profile from "./profile/Profile";
import SignIn from "./signIn/SignIn";

const MainRoutes = () => {
  return (
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
  );
};

export default MainRoutes;
