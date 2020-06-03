import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Store from "./store/Store";
import { HomePage } from "./views/HomePage";
import { ChatPage } from "./views/ChatPage";
import { DefaultTheme } from "./theme/DefaultTheme";

const ChatRoom: React.FC = () => {
  return (
    <DefaultTheme>
      <Store>
        <Router>
          <Switch>
            <Route path="/chat">
              <ChatPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </Store>
    </DefaultTheme>
  );
};

export default ChatRoom;
