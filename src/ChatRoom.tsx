import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Store from "./store/Store";
import { HomePage } from "./views/HomePage";
import { ChatPage } from "./views/ChatPage";

const ChatRoom: React.FC = () => {
  return (
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
  );
};

export default ChatRoom;
