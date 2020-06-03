import React from "react";
import styled from "styled-components";
import { IUser } from "../../../store/State";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./Message";
const MessageFromDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export interface IMesssageFromProperties {
  from: IUser;
}
export const MessageFrom: React.FC<IMesssageFromProperties> = (props) => {
  const { from } = props;
  const classes = useStyles();
  return (
    <MessageFromDiv>
      <Typography className={classes.text} variant="caption">
        {from.username}
      </Typography>
    </MessageFromDiv>
  );
};
