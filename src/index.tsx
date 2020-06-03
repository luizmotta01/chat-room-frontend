import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import * as serviceWorker from "./serviceWorker";
import ChatRoom from "./ChatRoom";

ReactDOM.render(
  <React.StrictMode>
    <ChatRoom />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
