import React from "react";
import styled from "styled-components";
import { RoomHeader } from "./header/RoomHeader";
import { RoomMessages } from "./messages/RoomMessages";
import { TextEditor } from "./text-editor/TextEditor";

const RoomDiv = styled.div`
  margin: 10px 15px 10px 5px;
  width: 100%;
  position: relative;
  height: calc(100vh - 20px);
  border-radius: 12px;
`;

export const Room: React.FC = () => {
  return (
    <RoomDiv>
      <RoomHeader />
      <RoomMessages />
      <TextEditor />
    </RoomDiv>
  );
};
