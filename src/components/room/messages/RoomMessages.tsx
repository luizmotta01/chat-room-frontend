import React from "react";
import styled from "styled-components";
import { useSelector } from "../../../store/Store";
import { RoomMessage } from "./RoomMessage";
import { Guid } from "guid-typescript";
import { IMessage } from "../../../store/State";

const RoomMessagesDiv = styled.div`
  overflow-y: "auto";
  overflow-x: "hidden";
  margin: 5px 0px;
  width: 100%;
  height: calc(95% - 120px);
  background-color: #f2e8dc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const RoomMessages: React.FC = () => {
  const messages = useSelector(({ currentRoom }) => currentRoom.messages);
  const user = useSelector(({ user }) => user);
  if (user.username === "") return null;

  return (
    <RoomMessagesDiv>
      {messages &&
        messages.map((message: IMessage) => (
          <RoomMessage key={Guid.create().toString()} message={message} />
        ))}
    </RoomMessagesDiv>
  );
};
