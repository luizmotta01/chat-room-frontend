import React from "react";
import styled from "styled-components";
import { RoomHeader } from "./RoomHeader";
import { RoomMessages } from "./RoomMessages";
import { RoomMessageEditor } from "./RoomMessageEditor";

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
      <RoomMessageEditor />
    </RoomDiv>
  );
};
