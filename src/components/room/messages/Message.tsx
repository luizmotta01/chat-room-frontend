import React from "react";
import styled from "styled-components";
import { IMessage } from "../../../store/State";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { MessageText } from "./MessageText";
import { MessageHeader } from "./MessageHeader";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      margin: "0px 10px",
      textAlign: "left",
      color: "#000",
      overflow: "ellipsis",
    },
  })
);

const MessageDiv = styled.div`
  border-radius: 10px;
  height: auto;
  min-height: 55px;
  background-color: #d9ccc1;
  width: 20%;
  min-width: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export interface IMessageProperties {
  message: IMessage;
}

export const Message: React.FC<IMessageProperties> = (props) => {
  const { from, sent, text } = props.message;
  return (
    <MessageDiv>
      <MessageHeader from={from} sent={sent} />
      <MessageText text={text} />
    </MessageDiv>
  );
};
