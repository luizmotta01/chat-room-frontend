import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./Message";
const MessageSentDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export interface IMessageSentProperties {
  sent: Date;
}
export const MessageSent: React.FC<IMessageSentProperties> = (props) => {
  const { sent } = props;
  const classes = useStyles();
  return (
    <MessageSentDiv>
      <Typography className={classes.text} variant="caption">
        {sent.toLocaleTimeString()}
      </Typography>
    </MessageSentDiv>
  );
};
