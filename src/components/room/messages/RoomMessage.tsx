import React from "react";
import styled from "styled-components";
import { IMessage, IUser } from "../../../store/State";
import { useSelector } from "../../../store/Store";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Message } from "./Message";

const RoomMessageDiv = styled.div`
  width: 100%;
  margin: 0px;
  position: relative;
  display: flex;
`;

export interface IRoomMessageProperies {
  message: IMessage;
}

export const RoomMessage: React.FC<IRoomMessageProperies> = (props) => {
  const user = useSelector(({ user }) => user);
  const { message } = props;
  const { from, sent, text } = message;

  return (
    <RoomMessageDiv
      style={{
        justifyContent: user.id === from.id ? "flex-start" : "flex-end",
      }}>
      <Message {...props} />
    </RoomMessageDiv>
  );
};
