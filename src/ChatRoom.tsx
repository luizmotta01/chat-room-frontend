import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Store from "./store/Store";
import { DefaultTheme } from "./theme/DefaultTheme";
import { LoginPage } from "./views/LoginPage";
import { RegisterPage } from "./views/RegisterPage";

const ChatRoom: React.FC = () => {
  return (
    <DefaultTheme>
      <Store>
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
      </Store>
    </DefaultTheme>
  );
};

export default ChatRoom;
