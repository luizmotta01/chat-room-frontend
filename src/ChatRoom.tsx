import React from "react";
import Store from "./store/Store";
import { DefaultTheme } from "./theme/DefaultTheme";
import { ChatRoomRouter } from "./router/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChatRoom: React.FC = () => {
  return (
    <DefaultTheme>
      <Store>
        <ChatRoomRouter />
        <ToastContainer />
      </Store>
    </DefaultTheme>
  );
};

export default ChatRoom;
