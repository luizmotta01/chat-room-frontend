import React from "react";
import styled from "styled-components";
import { useSelector } from "../store/Store";
import { Redirect } from "react-router-dom";

const ChatPageBody = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #69607f;
`;

export const ChatPage: React.FC = () => {
  const user = useSelector(({ user }) => user);
  if (!user || !user.username) return <Redirect to="/" />;

  return <ChatPageBody></ChatPageBody>;
};
