import React from "react";
import styled from "styled-components";
import { useSelector } from "../store/Store";
import { Redirect } from "react-router-dom";
import { Contacts } from "../components/contacts/Contacts";
import { Room } from "./../components/room/Room";

const ChatPageBody = styled.div`
  width: 100%;
  height: 100%;
  background-color: #8469c2;
  display: flex;
`;

export const ChatPage: React.FC = () => {
  const user = useSelector(({ user }) => user);
  if (!user || !user.username) return <Redirect to="/" />;

  return (
    <ChatPageBody>
      <Contacts />
      <Room />
    </ChatPageBody>
  );
};
