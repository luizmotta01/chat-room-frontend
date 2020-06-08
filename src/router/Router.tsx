import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage } from "../views/LoginPage";
import { RegisterPage } from "../views/RegisterPage";

export const ChatRoomRouter: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};
